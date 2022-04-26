import { Schema, model } from "mongoose";

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
  },
  {
    timestamps: true,
  }
);

const Token = model("Token", TokenSchema);

export { Token };
