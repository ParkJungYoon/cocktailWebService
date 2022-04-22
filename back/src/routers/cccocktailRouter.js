import { Router } from "express";
import { cocktailService } from "../services/cocktailService";

const cocktailRouter = Router();

// 특정 칵테일 조회 API
cocktailRouter.get("/cocktail", async (req, res, next) => {
  try {
    const { name } = req.body;
    const cocktailInfo = await cocktailService.getCocktailInfo({
      name,
    });
    res.status(200).json(cocktailInfo);
  } catch (error) {
    next(error);
  }
});

export { cocktailRouter };
