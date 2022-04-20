import { Router } from "express";

import { LoginService } from "../service/loginService";

import { verifyToken } from "../middleware/verifyToken";
const loginRouter = Router();

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
