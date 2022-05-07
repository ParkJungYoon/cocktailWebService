import { Schema, model } from "mongoose";
import { krTime } from "../../utils/time";

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
    createdAt : {
      type : Date,
      required : true,
      default : krTime()
    },
    updatedAt : {
      type : Date,
      required : true,
      default : krTime()
    }
  }
);

const Board = model("Board", boardSchema);

export { Board };
