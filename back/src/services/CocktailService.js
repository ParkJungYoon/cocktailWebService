import { CocktailModel } from "../db";

class CocktailService {
  // 칵테일 조회(cocktail DB에서)
  static getCocktailList = async () => {
    const cocktailList = await CocktailModel.getAllCocktail();
    return cocktailList;
  };

  static getCocktail = async ({ name }) => {
    const cocktail = await CocktailModel.findCocktail({ name })
    return cocktail;
  }

  static addCocktail = async (cocktail) => {
    const addResult = await CocktailModel.addCocktail(cocktail)
    return addResult;
  }

  static updateCocktail = async (filter, cocktail) => {

    const updateResult = await CocktailModel.modify(filter, cocktail)
    return updateResult;
  }

  static deleteCocktail = async ({ name }) => {
    const deleteResult = await CocktailModel.deleteCocktail({ name })
    return deleteResult;
  }

}

export { CocktailService };
