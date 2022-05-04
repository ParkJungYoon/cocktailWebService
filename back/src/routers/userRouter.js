import { Router } from "express";
import { userService } from "../services/userService";
import { verifyToken } from "../middlewares/verifyToken";
import { verifyRefresh } from "../middlewares/verifyRefresh";
import { loginValidation, registerValidation } from "../middlewares/validation";

const userRouter = Router();

userRouter.post("/register", registerValidation, async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await userService.addUser({ email, password, name });
    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/user/count", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const newUser = await userService.userCount({ userId });
    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

userRouter.delete("/withdrawal", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const deletedUser = await userService.delete({ userId });
    if (deletedUser.errorMessage) {
      throw new Error(deletedUser.errorMessage);
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
});

userRouter.put("/login/modify", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const email = req.body.email ?? null;
    const password = req.body.password ?? null;
    const name = req.body.name ?? null;

    const toUpdate = { email, password, name };
    const updatedUser = await userService.modify({ userId, toUpdate });

    if (updatedUser.errorMessage) {
      throw new Error(updatedUser.errorMessage);
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/login", loginValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const discoveredUser = await userService.findUser({ email, password });

    if (discoveredUser.errorMessage) {
      throw new Error(discoveredUser.errorMessage);
    }

    res.status(200).json(discoveredUser);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/user/current", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const discoveredUser = await userService.getUserInfo({
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
userRouter.get("/refresh", verifyRefresh);

export { userRouter };
