import { Router } from "express";
import { CocktailService } from "../services/CocktailService";
import { verifyToken } from "../middlewares/verifyToken";

const CocktailRouter = Router();


export { CocktailRouter };
