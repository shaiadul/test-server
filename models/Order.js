const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Delivered"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Order", orderSchema);
