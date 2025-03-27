import Post from "../models/Post.model.js";
import User from "../models/user.model.js";



export const createPost = async (userId, param) => {
const user =await User.findById(userId);
  const post = await Post(param).save();
   await User.findByIdAndUpdate({_id:userId},{ $addToSet: { post: post._id } });
  return  user
};

// export const getPosts = async () => {
//   const posts = await Post.find().populate([
//     {
//       path: "PostBy",
//       select: "name email",
//     },
//     {
//       path: "likes",
//     },
//     {
//       path: "comment",
//       populate: {
//         path: "user",
//         select: "name email",
//       },
//     },
//   ]);
//   return posts;
// };

// export const getPost = async (id) => {
//   const post = await Post.findById({
//     _id: id,
//   }).populate([
//     {
//       path: "PostBy",
//       select: "name email",
//     },
//     {
//       path: "likes",
//     },
//     {
//       path: "comment",
//       populate: {
//         path: "user",
//         select: "name email",
//       },
//     },
//   ]);
//   return post;
// };

// export const updatePost = async (id, body) => {
//   const postid = await Post.findById(id);
//   if (!postid) {
//     throw new Error("Post not found");
//   }

//   return await Post.findByIdAndUpdate(
//     {
//       _id: id,
//     },
//     {
//       $set: body,
//     },
//     {
//       new: true,
//     }
//   );
// };

export const deletePost = async (id) => {
  const post = await Post.findById(id).populate("comment");
  if (!post) {
    throw new Error("Post not found");
  }

  // Delete all comments associated with the post
  if (post.comment && post.comment.length > 0) {
    for (const comment of post.comment) {
      await comment.deleteOne();
    }
  }

  // Delete the post itself
  await post.deleteOne();

  return { message: "Post and associated comments deleted successfully" };
};
