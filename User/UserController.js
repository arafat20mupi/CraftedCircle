const User = require("./UserSchema");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, uid } = req.body;
    const user = new User({ name, email, password, uid });
    await user.save();

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Error create user", error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User data updated successfully!",
      user,
    });

    console.log(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error: error.message,
    });
  }
};
