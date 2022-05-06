import { Schema, model } from "mongoose";

const boardSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    images: {
      type: [String],
    },
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    visited: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const Board = model("Board", boardSchema);

export { Board };
