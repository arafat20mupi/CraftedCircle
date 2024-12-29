const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    profileImg: { type: String },
    coverImg: { type: String },
    name: { type: String, required: true },
    intro: { type: String },
    location: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, },
    work: [{ type: String }],
    education: [{ type: String }],
    skill: [{ type: String }],
    contactNum: { type: Number },
    uid: { type: String},
    link: {
      github: { type: String },
      linkedin: { type: String },
      portfolio: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);