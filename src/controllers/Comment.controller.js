import {
  getCommentsByPostId,
  updateComment,
  deleteComment,
  addComment,
  deleteCommentPost,
  getCommentsByUser,
} from "../services/Comment.service.js";

export async function addCommentController(req, res) {
  const { postId } = req.params;

  try {
    const comment = await addComment(postId, req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCommentsByUserController(req, res) {
  try {
    const  {userId}=req.params
    const comments = await getCommentsByUser(userId);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCommentsByPostIdController(req, res) {
  try {
    const comments = await getCommentsByPostId(req.params.postId);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateCommentController(req, res) {
  try {
    const updatedComment = await updateComment(req.params.id, req.body);
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function deleteCommentController(req, res) {
    
  try {
    const deletedComment = await deleteComment(req.params.id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCommentByPostController(req, res) {
 
  try {
    const deletedComment = await deleteCommentPost(
      req.query.postId,
      req.query.commentId
    );
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
