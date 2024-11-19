const mongoose =require('mongoose')

const postSchema=new mongoose.Schema(
    {
        userEmail: { type: String, required: true,},
        userUid: { type: String, required: true,},
        userName: { type: String, required: true,},
        userImage: { type: String, required: true,},
        title: { type: String, required: true,},
        photo:{type: String},
        video:{type: String}

    },
    { timestamps: true }
)
module.exports = mongoose.model("Post",postSchema);