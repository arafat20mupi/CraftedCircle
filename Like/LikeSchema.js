const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
  {
    post_id: { type: String, required: true },
    like: { type: String, required: true },
    userName: { type: String, required: true },
    userImage: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Like", LikeSchema);