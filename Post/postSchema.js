const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    userUid: { type: String, required: true },
    userName: { type: String, required: true },
    userImage: { type: String, required: true },
    title: { type: String, required: true },
    photo: { type: String },
    video: { type: String },
    comment: [
      {
        text: { type: String, required: true },
        commentEmail: { type: String, required: true },
        commentPhoto: { type: String, required: true },
        commentName: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      }
    ],
    like: [{ type: Number }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
