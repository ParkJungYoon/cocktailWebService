import { Schema, model } from "mongoose";
import { krTime } from "../../utils/time";

const CommentSchema = new Schema(
  {
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
    },
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
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
  },
);

const Comment = model("Comment", CommentSchema);

export { Comment };
