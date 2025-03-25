import {
    createComment,
    getComments,
    getCommentsByPostId,
    updateComment,
    deleteComment,
} from "../services/Comment.services.js";

export async function createCommentController(req, res) {
    try {
        const comment = await createComment(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getCommentsController(req, res) {
    try {
        const comments = await getComments(req.query);
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
        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
