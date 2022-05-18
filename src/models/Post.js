import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    author: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    keywords: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Post", postSchema);
