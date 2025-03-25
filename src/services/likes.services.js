import Post from "../models/Post.model.js";

export const addLike = async (postId, userId) => {
    console.log(postId,userId)
  const like = await Post.findById(postId);
  if (!like) {
    throw new Error("Post not found");
  }

  await Post.updateOne(
    {
      _id: postId,
    },
    {
      $addToSet: { likes: userId },
    },
    {
      new: true,
    }
  );
  return { message: "Like added successfully" };
};

export const removeLike = async (postId, userId) => {
  const like = await Post.findById(postId);
  if (!like) {
    throw new Error("Post not found");
  }
  await Post.updateOne(
    {
      _id: postId,
    },
    {
      $pull: { likes: userId },
    },
    {
      new: true,
    }
  );
  return { message: "Like removed successfully" };
};
