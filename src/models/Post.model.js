import mongoose from "mongoose";

const Postschema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    media: {
      type: String,
    },
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newUser",
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    share: {
      type: Number,
      default: 0,
    },
    views: { type: Number, default: 0 },
    viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    hashtage: [
      {
        type: String,
      },
    ],
    mentions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newUser",
      },
    ],
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", Postschema);
export default Post;
