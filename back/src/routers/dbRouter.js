import { Router } from "express";
import { dbService } from "../services/dbService";

const dbRouter = Router();

// new Cocktail DB
dbRouter.post("/addCocktail", async (req, res, next) => {
  try {
    const { name, ingredient, imageUrl, flavor, description, alcohol } =
      req.body;
    const addCocktail = await dbService.addCocktail({
      name,
      ingredient,
      imageUrl,
      flavor,
      description,
      alcohol,
    });
    res.status(200).json(addCocktail);
  } catch (error) {
    next(error);
  }
});

dbRouter.post("/modifyCocktail", async (req, res, next) => {
  try {
    const {
      cocktailId,
      name,
      ingredient,
      imageUrl,
      flavor,
      description,
      alcohol,
    } = req.body;
    const modifiedCocktail = await dbService.modify({
      cocktailId,
      name,
      ingredient,
      imageUrl,
      flavor,
      description,
      alcohol,
    });
    res.status(200).json(modifiedCocktail);
  } catch (error) {
    next(error);
  }
});

export { dbRouter };
