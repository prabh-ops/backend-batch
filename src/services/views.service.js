import Post from "../models/Post.model.js";

export const incrementView = async (postId, userId) => {
  
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error("Post not found");
  }
  if (!post.viewers.includes(userId)) {
    post.views += 1;
    post.viewers.push(userId);
    await post.save();
  }
  return post.views;
};
