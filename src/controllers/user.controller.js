import User from "../models/User";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ message: "No user found" });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
