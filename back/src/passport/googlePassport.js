import passport from "passport";
import googleOAuth from "../utils/googleOAuth";

passport.use(googleOAuth);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export { passport };
