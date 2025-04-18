const { json } = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const httperrors = require("http-errors");
const Db = require("./config/db");
require("dotenv").config();
const cors = require("cors");

// const EmployeeRouter = require("./routes/employee.route");
// const DepartmentRouter = require("./routes/department.route");
const AuthController = require("./routes/homeRoute");

// Khởi tạo webserver bằng express
const app = express();
app.use(express.json());
// Thêm CORS để chấp nhận request từ localhost:3000
const corsOptions = {
  origin: "http://localhost:3000", // Cho phép truy cập từ localhost:3000
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Cho phép gửi cookie hoặc thông tin xác thực
};
app.use(cors(corsOptions));

//Thêm các middleware để kiểm soát request trước khi xử lý actions
app.use(morgan("dev"));
app.use(json());

//Thực hiện tiếp nhận request từ client theo method GET
app.get("/", async (req, res, next) => {
  res.status(200).json({ message: "Welcome to RESTFull API - NodeJS" });
});
app.use("/api/notifications", require("./routes/notificationRouter"));
app.use("/api/dashboard", AuthController);
// app.use("/department",DepartmentRouter);


// Thêm middleware kiểm soát các lỗi trên requests và response
app.use(async (req, res, next) => {
  next(httperrors.BadRequest("Error: Bad Request"));
});


//Kiểm soát lỗi bất kỳ: 4xx hoặc 5xx
app.use(async (err, req, res, next) => {
  //Lấy status code thực tế đang gặp phải
  res.status(err.status || 500);
  res.json({ Status: err.status, message: err.message });
});

const HOST = process.env.HOST_NAME || "localhost";
const PORT = process.env.PORT || 9999;
app.listen(PORT, HOST, async () => {
  console.log(`Server running at: http://${HOST}:${PORT}`);
  await Db.connectDB();
});
