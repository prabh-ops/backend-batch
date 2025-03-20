import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  profilePic: {
    type: String,
  },
  bio: {
    type: String,
  },
  follower: {
    type: Number,
    default: 0,
  },
  follows: {
    type: Number,
    default: 0,
  },
});

const User = new mongoose.model("newUser", userSchema);
export default User;
