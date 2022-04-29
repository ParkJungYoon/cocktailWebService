import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    boardId: {
      type: String,
      //   type: Schema.Types.ObjectId,
      //   ref: "Board",
    },
    userId: {
      type: String,
      //   type: Schema.Types.ObjectId,
      //   ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = model("Comment", CommentSchema);

export { Comment };
