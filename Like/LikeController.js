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