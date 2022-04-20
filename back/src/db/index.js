import mongoose from "mongoose";

import { UserModel } from "./model/User";

import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`${MONGO_URL}에 연결 성공!`))
  .catch(() => console.log("몽고디비 연결 실패..."));

export { UserModel };
