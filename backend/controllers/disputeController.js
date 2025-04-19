const Dispute = require("../models/dispute");

exports.getAllDisputes = async (req, res) => {
  try {
    const disputes = await Dispute.find()
      .populate("complainant", "username email")
      .populate("against", "username email")
      .populate("orderId");

    res.json(disputes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateDisputeStatus = async (req, res) => {
  const { status, resolutionNote } = req.body;

  try {
    const dispute = await Dispute.findByIdAndUpdate(
      req.params.id,
      { status, resolutionNote },
      { new: true }
    );
    res.json(dispute);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};
