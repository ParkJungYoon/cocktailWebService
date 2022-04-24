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

// 전체 칵테일 조회
CocktailRouter.get("/cocktailList", async (req, res, next) => {
  try {
    const cocktailList = await CocktailService.getCocktailList();
    res.status(200).json(cocktailList);
  } catch (error) {
    next(error);
  }
});

CocktailRouter.use(verifyToken);
// 유저 칵테일 생성
CocktailRouter.post("/cocktail/create/:user_id", async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const { name, ingredient, description, imageUrl } = req.body;
    const addCocktail = await CocktailService.addCocktail({
      name,
      ingredient,
      description,
      imageUrl,
      user_id,
    });
    res.status(200).json(addCocktail);
  } catch (error) {
    next(error);
  }
});

// 유저 칵테일 전체 조회
CocktailRouter.get("/cocktail/:user_id", async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const userCocktailInfo = await CocktailService.getUserCocktailInfo({
      user_id,
    });
    res.status(200).json(userCocktailInfo);
  } catch (error) {
    next(error);
  }
});

// 유저 칵테일 수정
CocktailRouter.put("/cocktail/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, ingredient, description, imageUrl, user_id } = req.body;
    const updatedCocktail = await CocktailService.update({
      _id: id,
      name,
      ingredient,
      description,
      imageUrl,
      user_id,
    });
    res.status(200).json(updatedCocktail);
  } catch (error) {
    next(error);
  }
});

// 유저 칵테일 삭제
CocktailRouter.delete("/cocktail/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCocktail = await CocktailService.deleteCocktail({ id });

    if (deletedCocktail.errorMessage) {
      throw new Error(deletedCocktail.errorMessage);
    }

    res.status(200).json(deletedCocktail);
  } catch (error) {
    next(error);
  }
});

export { CocktailRouter };
