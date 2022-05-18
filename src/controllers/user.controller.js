import User from "../models/User";

export const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
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
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({ message: "User updated successfully", updatedUser });
};

export const deleteUserById = async (req, res) => {
  const { userId } = req.params;

  await User.findByIdAndDelete(userId);

  res.status(200).json({ message: "User deleted successfully" });
};
