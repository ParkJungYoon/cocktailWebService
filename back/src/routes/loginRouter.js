import { Router } from "express";

import { LoginService } from "../service/loginService";
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

export { loginRouter };
