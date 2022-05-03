import { Router } from "express";
import { LoginService } from "../services/loginService";
import { verifyToken } from "../middlewares/verifyToken";
import { verifyRefresh } from "../middlewares/verifyRefresh";
import { loginValidation, registerValidation } from "../middlewares/validation";

const loginRouter = Router();

loginRouter.post("/register", registerValidation, async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await LoginService.addUser({ email, password, name });
    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

loginRouter.delete("/withdrawal", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const deletedUser = await LoginService.delete({ userId });
    if (deletedUser.errorMessage) {
      throw new Error(deletedUser.errorMessage);
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
});

loginRouter.put("/login/modify", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const email = req.body.email ?? null;
    const password = req.body.password ?? null;
    const name = req.body.name ?? null;

    const toUpdate = { email, password, name };
    const updatedUser = await LoginService.modify({ userId, toUpdate });

    if (updatedUser.errorMessage) {
      throw new Error(updatedUser.errorMessage);
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

loginRouter.post("/login", loginValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const discoveredUser = await LoginService.findUser({ email, password });

    if (discoveredUser.errorMessage) {
      throw new Error(discoveredUser.errorMessage);
    }

    res.status(200).json(discoveredUser);
  } catch (error) {
    next(error);
  }
});

loginRouter.get("/user/current", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const discoveredUser = await LoginService.getUserInfo({
      userId,
    });

    if (discoveredUser.errorMessage) {
      throw new Error(discoveredUser.errorMessage);
    }

    res.status(200).json(discoveredUser);
  } catch (error) {
    next(error);
  }
});

/* access token을 재발급 하기 위한 router.
  클라이언트는 access token과 refresh token을 둘 다 헤더에 담아서 요청해야합니다. */
loginRouter.get("/refresh", verifyRefresh);

export { loginRouter };
