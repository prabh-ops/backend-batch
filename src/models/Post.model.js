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
    PostBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    visibility: {
      enum: ["public", "private"],
      default: "public",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
    views: {
      type: Number,
      default: 0,
    },
    hashtage: [
      {
        type: String,
      },
    ],
    mentions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", Postschema);
