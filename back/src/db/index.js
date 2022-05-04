import mongoose from "mongoose";

import { UserModel } from "./models/User";
import { CocktailModel } from "./models/Cocktail";
import { RankModel } from "./models/Rank";
import { LikeModel } from "./models/Like";
import { TokenModel } from "./models/Token";
import { CommentModel } from "./models/Comment";
import { BoardModel } from "./models/Board";

import { ImageModel } from "./models/Image";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`${MONGO_URL}에 연결 성공!`))
  .catch(() => console.log("몽고DB 연결 실패..."));

const db = mongoose.connection;

export {
  db,
  UserModel,
  CocktailModel,
  RankModel,
  LikeModel,
  TokenModel,
  CommentModel,
  BoardModel,
  ImageModel,
};
