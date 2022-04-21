import cors from "cors";
import express from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { registerRouter } from "./routers/registerRouter";
import { loginRouter } from "./routers/loginRouter";
import { CocktailRouter } from "./routers/CocktailRouter";
import passport from "passport";
import session from "express-session";
import googleOAuth from "./utils/googleOAuth";
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
passport.use(googleOAuth);

passport.serializeUser((user, done) => {
  done(null, user);
});
app.use(registerRouter);
app.use(loginRouter);
app.use(CocktailRouter);

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/error" }), function (req, res) {
  res.redirect("/");
});

app.use(registerRouter);
app.use(loginRouter);
app.use(errorMiddleware);

export { app };
