import { Schema, model } from "mongoose";
import { krTime } from "../../utils/time";

const TokenSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    refreshToken: {
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

const Token = model("Token", TokenSchema);

export { Token };
