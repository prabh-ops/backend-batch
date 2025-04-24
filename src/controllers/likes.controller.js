import { addLike, removeLike } from "../services/likes.service.js";

export async function addLikeController(req, res) {
  try {
    const { postId, userId } = req.query;
   
    const response = await addLike(postId, userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function removeLikeController(req, res) {
  try {
    const { postId, userId } = req.query;
    
    const response = await removeLike(postId, userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
