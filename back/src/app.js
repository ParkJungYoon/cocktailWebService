import cors from "cors";
import express from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { registerRouter } from "./routers/registerRouter";
import { loginRouter } from "./routers/loginRouter";
import { CocktailRouter } from "./routers/CocktailRouter";
import { RankRouter } from "./routers/RankRouter";
import { dbRouter } from "./routers/dbRouter";

import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./modules/swagger.json";

import { passport } from "./passport/googlePassport";
import { LikeRouter } from "./routers/LikeRouter";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

// swagger
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// google
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { 
    failureRedirect: "/login"
  }), function(req, res) {
    res.status(200).json(req.user);
  }
);
// -----------------------------------------------------------------------------------------------------------
// MVP router
app.use(dbRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(CocktailRouter);
app.use(RankRouter);
app.use(LikeRouter);

// errorMessage yellow
app.use(errorMiddleware);

export { app };
