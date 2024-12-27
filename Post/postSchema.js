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
        text: { type: String, },
        commentEmail: { type: String, },
        commentPhoto: { type: String, },
        commentName: { type: String, },
        createdAt: { type: Date, default: Date.now },
      }
    ],
    like: [{
      likeEmail: { type:String, },
      likePhoto: { type:String, },
      likeName: { type:String, },
      like:{type:String}
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
