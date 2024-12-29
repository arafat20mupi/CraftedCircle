const User = require("./UserSchema");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // Ensure `email` exists
    if (!email) {
      return res.status(400).json({ error: "Email parameter is required" });
    }

    // Find user by email
    const user = await User.findOne({ email }); // Use `findOne` for a single user or `find` for multiple users

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({ message: "Error fetching user by email", error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, profileImg, uid , password } = req.body;
    // Validate input
    if (!name || !email || !uid || !profileImg || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create and save the user
    const user = new User({ name, email, profileImg, uid ,password});
    await user.save();

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Error creating user",
      error: error.message || error,
    });
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


