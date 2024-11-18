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