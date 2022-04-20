import { Router } from "express";
import { registerService } from "../service/registerService";

const registerRouter = Router();

registerRouter.post("/register", async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await registerService.addUser({ email, password, name });

    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

export { registerRouter };
