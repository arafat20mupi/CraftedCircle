const postSchema = require("./postSchema");

exports.createPost = async (req, res) => {
    try {
        const post = new postSchema(req.body)
        await post.save();

        res.status(201).send({
             message: "create post", post ,
            success: true,
            post,
            
        });
        
    } catch (error) {
        res.status(500).send({ message: "Error creating post", error });
    }
};
exports.getPost = async(req, res) => {
    try {
        const post = await postSchema.find()
        res.status(200).send({ post })
    } catch(error) {
        res.status(500).send({ message: "Error fetching post", error });
    }

}
exports.addComment = async (req, res) => {
    try {
        const { id } = req.params; // The ID of the post to comment on
        const { text, commentEmail } = req.body; // Comment data (user email and comment text)
        console.log(id);
        
        // Ensure both text and commentEmail are present
        if (!text || !commentEmail) {
            return res.status(400).send({ message: "Comment text and user email are required" });
        }

        const post = await postSchema.findById({_id : id} )
        // console.log(post)
        
        if (!post) {
            return res.status(404).send({ message: "Post not found" });
        }

        // Add the comment to the post
        post.comment.push({ text, commentEmail });
        await post.save();

        res.status(200).send({
            message: "Comment added successfully",
            success: true,
            post,
        });
    } catch (error) {
        res.status(500).send({ message: "Error adding comment", error });
    }
};
