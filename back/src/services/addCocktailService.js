import { CocktailModel } from "../db";

class addCocktailService {
  static addCocktail = async ({ name, ingredient, rank }) => {
    const addCocktailData = { name, ingredient, rank };
    const addCocktail = await CocktailModel.addCocktail(addCocktailData);
    return addCocktail;
  };
}

export { addCocktailService };
