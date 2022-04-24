import { CocktailInfo } from "../schemas/cocktail_info";

class CocktailInfoModel {
  static addCocktail = async (addCocktailData) => {
    const addCocktail = await CocktailInfo.create(addCocktailData);
    return addCocktail;
  };
  static modify = async (filter, updateCocktailData) => {
    const option = { returnOriginal: false };
    const updatedCocktail = await CocktailInfo.findByIdAndUpdate(
      filter,
      updateCocktailData,
      option
    );
    return updatedCocktail;
  };
}

export { CocktailInfoModel };
