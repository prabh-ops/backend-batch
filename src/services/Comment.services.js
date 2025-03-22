import Comment from "../models/comment.model.js";
import Post from "../models/Post.model.js";

export async function addComment(postId, data) {
  const post = await Post.findById(postId);
  if (!post) {
    throw new Error("Post not found");
  }

  const comment = await Comment({ ...data });
  await comment.save();

  if (!Array.isArray(post.comment)) {
    post.comment = [];
  }
  // first method to  add the  comment to the post
  // post.comment.push(comment._id);
  // await post.save();
  await Post.updateOne(
    { _id: postId },
    { $addToSet: { comment: comment._id } }
  );

  return comment;
}

export async function getComments(filter = {}) {
  return await Comment.find(filter).populate("user");
}

// Retrieve comments for a specific post by post ID
export async function getCommentsByPostId(postId) {
  return await Comment.find({ postId });
}

// Update a comment by ID
export async function updateComment(id, data) {
  return await Comment.findByIdAndUpdate(id, data, { new: true });
}

// Delete a comment by ID
export async function deleteComment(id) {
  return await Comment.findByIdAndDelete(id);
}
