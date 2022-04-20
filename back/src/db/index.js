import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`${MONGO_URL}에 연결 성공!`))
  .catch(() => console.log("몽고DB 연결 실패..."));
