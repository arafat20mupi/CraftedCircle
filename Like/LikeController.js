const Like = require("./LikeSchema");

exports.createLike = async (req, res) => {
    try {
        const like = new Like(req.body)
        await like.save();

        res.status(201).send({
             message: "create like", like ,
            success: true,
            like,
            
        });
        
    } catch (error) {
        res.status(500).send({ message: "Error creating like", error });
    }
};

exports.getLike = async (req, res) => {
    try {
        const likes = await Like.find(); // Fetch all likes from the database
        res.status(200).send({
            message: "All likes fetched successfully",
            success: true,
            likes,
        });
    } catch (error) {
        res.status(500).send({
            message: "Error fetching likes",
            success: false,
            error,
        });
    }
};

exports.deleteLike = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the Like ID is passed as a URL parameter
        const deletedLike = await Like.findByIdAndDelete(id);

        if (!deletedLike) {
            return res.status(404).send({
                message: "Like not found",
                success: false,
            });
        }

        res.status(200).send({
            message: "Like deleted successfully",
            success: true,
            deletedLike,
        });
    } catch (error) {
        res.status(500).send({ message: "Error deleting like", error });
    }
};