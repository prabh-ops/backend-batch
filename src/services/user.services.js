import mongoose from "mongoose";
import User from "../models/user.model.js";

export const createUser = async (param) => {
  const user = await User(param).save();
  return user;
};
export const getUser = async (param) => {
  const user = await User.find({
    email: param,
  });

  return user;
};
export const getUsers = async () => {
  const user = await User.find();
  console.log(user);
  return user;
};

export const updateUser = async (id, body) => {   
  // ??  first method  for update the user
  //  const oId = new mongoose.Types.ObjectId(id);
  //  const newUser = await User.findById(oId);
  //  newUser.name = undefined;
  //   return await user.save();

  // ??  second method  for update the user
  //   await User.updateOne(
  //   {
  //     _id: id,
  //   },{
  //     $set: body
  //   }
  // );
  //  return User.findById(id)

  // ??  third method  for update the user
  const userid=  await  User.findById(id)
  if(!userid){
    throw new Error("user not found");
  }
  const user = await User.findByIdAndUpdate(id, body, { new: true });
  return user;
};

export const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete({_id:new mongoose.Types.ObjectId(id)});
  if (!user) {
  throw new Error("Prabh Not found")
  }
};
