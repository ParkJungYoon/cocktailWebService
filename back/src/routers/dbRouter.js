import { Router } from "express";
import { dbService } from "../services/dbService";
import { verifyToken } from "../middlewares/verifyToken";

const dbRouter = Router();

// new Cocktail DB
dbRouter.post("/addCocktail", async (req, res, next) => {
  try {
    const { name, ingredient, imageUrl, flavor, description } = req.body;
    console.log(req.body);
    const addCocktail = await dbService.addCocktail({
      name,
      ingredient,
      imageUrl,
      flavor,
      description,
    });
    res.status(200).json(addCocktail);
  } catch (error) {
    next(error);
  }
});

export { dbRouter };
