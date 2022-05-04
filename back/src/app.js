import cors from "cors";
import express from "express";
import axios from "axios";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { userRouter } from "./routers/userRouter";
import { CocktailRouter } from "./routers/CocktailRouter";
import { RankRouter } from "./routers/RankRouter";
import { dbRouter } from "./routers/dbRouter";
import { LikeRouter } from "./routers/LikeRouter";
import { CommentRouter } from "./routers/CommentRouter";
import { BoardRouter } from "./routers/BoardRouter";

import { ImageRouter } from "./routers/ImageRouter";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./modules/swagger.json";

import { passport } from "./passport/googlePassport";
import { config, findOrCreateUser, getKakaoData } from "./utils/kakaoOAuth";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

// swagger
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// kakao
app.get("/auth/kakao", (req, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code&scope=profile_nickname`;
  res.redirect(kakaoAuthURL);
});

app.get("/auth/kakao/callback", async (req, res) => {
  //axios>>promise object
  try {
    console.log("ASdasd");
    //access토큰을 받기 위한 코드
    const token = await axios({
      //token
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        grant_type: "authorization_code", //특정 스트링
        client_id: config.clientID,
        client_secret: config.clientSecret,
        redirectUri: config.callbackURL,
        code: req.query.code, //결과값을 반환했다. 안됐다.
      }), //객체를 string 으로 변환
    });
    console.log("sadasdasd");
    req = getKakaoData(req, token);
    console.log(req);
    //findOrCreateUser()
    //res.send()
    res.redirect("/");
  } catch (err) {
    res.json(err.data);
  }
});

// google
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  function (req, res) {
    res.status(200).json(req.user);
  }
);
// -----------------------------------------------------------------------------------------------------------
// MVP router
app.use(dbRouter);
app.use(userRouter);
app.use(CocktailRouter);
app.use(RankRouter);
app.use(LikeRouter);
app.use(CommentRouter);
app.use(BoardRouter);

app.use(ImageRouter);
// errorMessage yellow
app.use(errorMiddleware);

export { app };
