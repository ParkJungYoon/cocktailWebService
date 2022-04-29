import { Schema, model } from "mongoose";

const boardSchema = new Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: String,
  },
  context: {
    type: String,
  },
});

const Board = model("Board", boardSchema);

export { Board };
