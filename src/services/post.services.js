import { Post } from "../models/Post.model.js";

export const createPost = async (param) => {
  const post = await Post(param).save();
  return post;
};

export const getPosts = async () => {
  const posts = await Post.find();
  return posts;
};

export const getPost = async (id) => {
  const post = await Post.findById({
    _id: id,
  });
  return post;
};

export const updatePost = async (id, body) => {

const postid =await Post.findById(id)
if(!postid){
throw new Error('Post not found')
}


  return await Post.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      $set: body,
    },
    {
      new: true,
    }
  );

};

export const deletePost = async (id) => {
  const post = await Post.findById(id);
  if (!post) {
    return { message: "Post not found" };
  }
  await post.deleteOne();
};
