import { Router } from "express";
import { RegisterService } from "../services/registerService";

const registerRouter = Router();

registerRouter.post("/register", async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await RegisterService.addUser({ email, password, name });
    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

export { registerRouter };
