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
      const { id } = req.params;
      const { text, commentEmail , commentName , commentPhoto } = req.body;
  
      if (!text || !commentEmail  || !commentName || !commentPhoto) {
        return res.status(400).send({ message: "Comment text and user email are required" });
      }
  
      const post = await postSchema.findById(id);
      if (!post) {
        return res.status(404).send({ message: "Post not found" });
      }
  
      post.comment.push({ text, commentEmail ,  commentName , commentPhoto });
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
  