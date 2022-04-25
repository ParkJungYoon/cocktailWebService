import { Router } from "express";
import { RankService } from "../services/RankService";
const RankRouter = Router();

RankRouter.get("/rank10", async (req, res, next) => {
  try {
    const top10List = await RankService.top10();
    res.status(200).json(top10List);
  } catch (error) {
    next(error);
  }
});

export { RankRouter };
