import { Router } from "express";

import { CocktailService } from "../services/CocktailService";

const CocktailRouter = Router();

CocktailRouter.post("/addRank", async (req, res, next) => {
  try {
    const { name, visitors, years, rank } = req.body;
    const addCocktailRank = await CocktailService.addCocktailRank({ name, visitors, years, rank });
    res.status(200).json(addCocktailRank);
  } catch (error) {
    next(error);
  }
});

CocktailRouter.post("/addCocktail", async (req, res, next) => {
  try {
    const { name, ingredient, rank } = req.body;
    console.log(name, ingredient, rank);
    const addCocktail = await CocktailService.addCocktail({ name, ingredient, rank });
    res.status(200).json(addCocktail);
  } catch (error) {
    next(error);
  }
});

CocktailRouter.post("/findCocktail", async (req, res, next) => {
  try {
    const { cocktail } = req.body;
    const findCocktail = await CocktailService.findCocktail({ cocktail });
    if (findCocktail.errorMessage) {
      throw new Error(findCocktail.errorMessage);
    }
    res.status(200).json(findCocktail);
  } catch (error) {
    next(error);
  }
});

export { CocktailRouter };
