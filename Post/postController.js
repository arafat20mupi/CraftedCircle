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

  exports.addLike = async (req, res) => {
    try {
      const { id } = req.params;
      const { like, likeEmail, likeName, likePhoto } = req.body;
      
      // Ensure both index and likeEmail are provided
      if (!like || !likeEmail || !likeName || !likePhoto) {
        return res.status(400).send({ message: "index and likeEmail are required" });
      }
      
      // Find the post by ID
      const post = await postSchema.findById(id);
      if (!post) {
        return res.status(404).send({ message: "Post not found" });
      }
      
      // Check if the user has already liked the post
      const alreadyLiked = post.like.some((like) => like.likeEmail === likeEmail);
      if (alreadyLiked) {
       post.like.$pop(like);
      }
      
      // Add the like to the post
      post.like.push({ like, likeEmail, likeName, likePhoto });
      await post.save();
      
      res.status(200).send({
        message: "Like added successfully",
        success: true,
        post,
      });
    } catch (error) {
      console.error(error); // For debugging purposes
      res.status(500).send({ message: "Error adding like", error });
    }
  };
  