import { Schema, model } from "mongoose";

const boardSchema = new Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  context: {
    type: String,
  },
});

const Board = model("Board", boardSchema);

export { Board };
