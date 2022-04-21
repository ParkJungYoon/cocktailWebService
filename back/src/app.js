import cors from "cors";
import express from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware";

import { registerRouter } from "./routers/registerRouter";
import { loginRouter } from "./routers/loginRouter";
import { addCocktailRouter } from "./routers/addCocktailRouter";
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});
app.use(registerRouter);
app.use(loginRouter);
app.use(addCocktailRouter);

app.use(errorMiddleware);

export { app };
