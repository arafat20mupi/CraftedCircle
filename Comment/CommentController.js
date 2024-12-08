const Comment =require("./CommentSchema")

exports.createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body)
        await comment.save();

        res.status(201).send({
             message: "create comment", comment ,
            success: true,
            comment,
            
        });
        
    } catch (error) {
        res.status(500).send({ message: "Error creating comment", error });
    }
};
exports.getComment = async(req, res) => {
    try {
        const post = await Comment.find()
        res.status(200).send({ post })
    } catch(error) {
        res.status(500).send({ message: "Error fetching post", error });
    }

}