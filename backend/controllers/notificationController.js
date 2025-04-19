const User = require("../models/user.js");
const Notification = require("../models/notification.js");
const { sendEmail } = require("../utils/nodemailer.js");

const sendSystemNotification = async (req, res) => {
  try {
    const { subject, message } = req.body;
    if (!subject || !message) {
      return res
        .status(400)
        .json({ message: "Subject and message are required" });
    }
    console.log(subject);

    // Lấy tất cả người dùng từ database
    const users = await User.find({}, "email");

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Tạo bản ghi thông báo
    const notification = new Notification({
      title: subject,
      message,
      recipients: users.map((user) => user._id),
    });

    // Gửi email tới từng người dùng
    const emailPromises = users.map((user) =>
      sendEmail(user.email, subject, message, `<p>${message}</p>`)
    );

    await Promise.all(emailPromises);

    // Đánh dấu là đã gửi và lưu vào database
    notification.sent = true;
    notification.sentAt = new Date();
    await notification.save();

    res.status(200).json({
      message: "Notification sent successfully",
      notification,
      recipientsCount: users.length,
    });
  } catch (error) {
    console.error("Error sending system notification:", error);
    res.status(500).json({ message: "Error sending notification", error });
  }
};

module.exports = { sendSystemNotification };
