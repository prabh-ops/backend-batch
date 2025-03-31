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

export async function getCommentsByUser(userid) {
  return Comment.find({
    user: userid,
  }).populate("user");
}
export async function getCommentById(commentId) {
  const comment = await Comment.findById(commentId).populate("user");
  if (!comment) {
    throw new Error("Comment not found");
  }
  return comment;
}
// Retrieve comments for a specific post by post ID
export async function getCommentsByPostId(postId){
  const post = await Post.findById(postId)
    .populate({
      path: "comment",
      populate: {
        path: "user",
      },
    })
    .populate("PostBy");
  if (!post) {
    throw new Error("Post not found");
  }
  if (post.comment.length === 0) {
    throw new Error("No comments found");
  }
  return post.comment;
}



export async function updateComment(id, data) {
  return await Comment.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteComment(id) {
  const comment = await Comment.findById(id); 
  await Comment.findByIdAndDelete(id);
  return {
    message: "Comment deleted successfully",
  };
}

export async function deleteCommentPost(postId, commentId) {
  const post = await Post.findById({
    _id: postId,
  });
  console.log(post);
  if (!post) {
    throw new Error("Post not found");
  }

  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new Error("Comment not found");
  }

  await Comment.deleteOne({ _id: commentId });

  // Remove the comment reference from the post
  await Post.updateOne(
    { _id: postId },
    { $pull: { comment: commentId } } // pull method to remove the comment from the post
  );

  return { message: "Comment deleted successfully" };
}
