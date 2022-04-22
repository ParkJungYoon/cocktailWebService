import { Router } from "express";
import { CocktailService } from "../services/CocktailService";
import { verifyToken } from "../middlewares/verifyToken";

const CocktailRouter = Router();

// 특정 칵테일 조회 API
CocktailRouter.get("/cocktail", async (req, res, next) => {
  try {
    const { name } = req.body;
    const cocktailInfo = await CocktailService.getCocktailInfo({
      name,
    });
    res.status(200).json(cocktailInfo);
  } catch (error) {
    next(error);
  }
});

CocktailRouter.use(verifyToken);
// 유저 칵테일 생성
CocktailRouter.post("cocktail/create/:user_id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export { CocktailRouter };
