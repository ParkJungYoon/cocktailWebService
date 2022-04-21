import { Router } from "express";
import { LoginService } from "../services/loginService";
import { verifyToken } from "../middlewares/verifyToken";

const loginRouter = Router();

loginRouter.delete("/login/delete", verifyToken, async (req, res, next) => {
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

loginRouter.post("/login/modify", verifyToken, async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const userId = req.user;
    const updatedUser = await LoginService.modify({ userId, email, password, name });
    if (updatedUser.errorMessage) {
      throw new Error(updatedUser.errorMessage);
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

loginRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const discoveredUser = await LoginService.findUser({ email, password });
    res.status(200).json(discoveredUser);
  } catch (error) {
    next(error);
  }
});

loginRouter.get("/verify", verifyToken, (req, res) => {
  res.status(200).json({
    status: "succ",
    userId: req.user,
  });
});

export { loginRouter };
