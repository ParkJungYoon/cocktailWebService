import { CocktailModel } from "../db";
import { RankModel } from "../db";
class CocktailService {
  static addCocktailRank = async ({ name, visitors, years, rank }) => {
    const addCocktailRankData = { name, visitors, years, rank };
    const addCocktail = await RankModel.addCocktail(addCocktailRankData);
    return addCocktail;
  };
  static addCocktail = async ({ name, ingredient, imageUrl, rank }) => {
    const addCocktailData = { name, ingredient, imageUrl, rank };
    const addCocktail = await CocktailModel.addCocktail(addCocktailData);
    return addCocktail;
  };
  static findCocktail = async ({ cocktail }) => {
    const findCocktail = await CocktailModel.findCocktail({ cocktail });
    if (!findCocktail) {
      const errorMessage = "해당 칵테일 내역이 없습니다.";
      return { errorMessage };
    }
    return findCocktail;
  };
  static modify = async ({ cocktailId, name, ingredient, imageUrl, rank }) => {
    const updateCocktailData = { name, ingredient, imageUrl, rank };
    const filter = { _id: cocktailId };
    const modifiedCocktail = await CocktailModel.modify(
      filter,
      updateCocktailData
    );
    return modifiedCocktail;
  };
}

export { CocktailService };
