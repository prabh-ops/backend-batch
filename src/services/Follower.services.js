import User from "../models/user.model.js";

   export const addFollower = async (userId, followerId) => {
  const user = await User.findById(userId);
  if (!user) {
    return { error: true, message: "User not found" };
  }

  if (!user.followers.includes(followerId)) {
    user.followers.push(followerId);
    await user.save();
  }

  return { message: "Follower added successfully", user };
};

   export const removeFollower = async (userId, followerId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  user.followers = user.followers.filter((id) => id.toString() !== followerId);
  await user.save();

  return { message: "Follower removed successfully", user };
};


