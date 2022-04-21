import { Router } from "express";
import { addCocktailService } from "../services/addCocktailService";

const addCocktailRouter = Router();

addCocktailRouter.post("/addCocktail", async (req, res, nest) => {
  try {
    const { name, ingredient, rank } = req.body;
    console.log(name, ingredient, rank);
    const addCocktail = await addCocktailService.addCocktail({ name, ingredient, rank });
    res.status(200).json(addCocktail);
  } catch (error) {
    next();
  }
});

export { addCocktailRouter };
