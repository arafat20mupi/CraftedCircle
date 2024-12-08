const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    post_id: { type: String, required: true },
    comment: { type: String, required: true },
    userName: { type: String, required: true },
    userImage: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
