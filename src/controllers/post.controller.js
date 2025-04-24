import {
  createPost,
  deletePost,
  getUserPosts,
} from "../services/post.service.js";

export const createPostController = async (req, res) => {
  try {
    const loggedInUser=req.auth
    const post = await createPost( loggedInUser,req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserPostsController = async (req, res) => {
  try {
    const loggedInUser=req.auth
    const posts = await getUserPosts(loggedInUser);
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({message: error.message });
  }
};


// export const getPostController = async (req, res) => {
//   try {
//     const post = await getPost(req.params.id);
//     res.status(200).json(post);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
// export const updatePostController = async (req, res) => {
//   try {
//     const post = await updatePost(req.params.id, req.body);
//     res.status(200).json({message:" Post updated successfully",success:true});
//   } catch (error) {
//     res.status(400).json({ message: error.message,success:false });
//   }
// };

 

export const deletePostController = async (req, res) => {
  try {
    const post = await deletePost(req.params.id);
    res.status(200).json({
      message: "Post deleted successfully",
      post,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
