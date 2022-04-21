import { CocktailModel } from "../db";
import { RankModel } from "../db";
class addCocktailService {
  static addCocktailRank = async ({ name, visitors, years, rank }) => {
    const addCocktailRankData = { name, visitors, years, rank };
    const addCocktail = await RankModel.addCocktail(addCocktailRankData);
    return addCocktail;
  };
  static addCocktail = async ({ name, ingredient, rank }) => {
    const addCocktailData = { name, ingredient, rank };
    const addCocktail = await CocktailModel.addCocktail(addCocktailData);
    return addCocktail;
  };
}

export { addCocktailService };
