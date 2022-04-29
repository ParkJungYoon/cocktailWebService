import { Router } from "express";
import { BoardService } from "../services/BoardService";
import { verifyToken } from "../middlewares/verifyToken";

const BoardRouter = Router();

BoardRouter.post("/addBoard/:id", verifyToken, async (req, res, next) => {
  try {
    const writer = req.user;
    const comment = req.params.id;
    const context = req.body.context;
    console.log(writer, comment, context);
    const newBoard = await BoardService.create({ writer, comment, context });
    res.status(200).json(newBoard);
  } catch (error) {
    next(error);
  }
});
export { BoardRouter };
