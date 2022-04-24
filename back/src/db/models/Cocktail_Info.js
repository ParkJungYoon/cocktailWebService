import { CocktailInfo } from "../schemas/cocktail_info";

class CocktailInfoModel {
  static addCocktail = async (addCocktailData) => {
    const addCocktail = await CocktailInfo.create(addCocktailData);
    return addCocktail;
  };
}

export { CocktailInfoModel };
