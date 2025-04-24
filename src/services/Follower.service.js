import User from "../models/user.model.js";

export const addFollower = async (userId, followerId) => {
  const user = await User.findById(userId);
  const follower = await User.findById(followerId);

  if (!user) {
    return { error: true, message: "User not found" };
  }

  if (!follower) {
    return { error: true, message: "Follower not found" };
  }

  if (!user.follower.includes(followerId)) {
    user.follower.push(followerId);
    await user.save();
  } else {
    return { error: true, message: "User already has this follower" };
  }

  if (!follower.follows.includes(userId)) {
    follower.follows.push(userId);
    await follower.save();
    return {
      message: "follower added successfully",
    };
  } else {
    return { error: true, message: "Follower already follows this user" };
  }

  return { message: "Follower added successfully" };
};

export const removeFollower = async (userId, followerId) => {
  const user = await User.findById(userId);
  const follower = await User.findById(followerId);

  if (!user) {
    throw new Error("User not found");
  }

  if (!follower) {
    throw new Error("Follower not found");
  }

  user.followers = user.followers.filter((id) => id.toString() !== followerId);
  await user.save();

  follower.follows = follower.follows.filter((id) => id.toString() !== userId);
  await follower.save();

  return { message: "Follower removed successfully" };
};
