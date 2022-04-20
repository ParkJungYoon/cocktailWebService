import cors from "cors";
import express from "express";

import { registerRouter } from "./routers/registerRouter";
import { loginRouter } from "./routers/loginRouter";
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

app.use(registerRouter);
app.use(loginRouter);

export { app };
