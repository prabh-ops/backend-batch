import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
    follower:[
     {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
     }
    ],
    follows: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("newUser", userSchema);
export default User;
