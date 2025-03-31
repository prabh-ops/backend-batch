
import Post from "../models/Post.model.js";
import { incrementView } from "../services/views.service.js";

/**
 * Handle view count API.
 */
export const viewPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body; // Track unique views if needed

    const views = await incrementView(postId, userId);
    res.status(200).json({ views });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get total views of a post.
 */
export const getViewCount = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ views: post.views });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
