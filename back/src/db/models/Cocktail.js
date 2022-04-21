import { Cocktail } from "../schemas/cocktail";

class CocktailModel {
  static addCocktail = async addCocktailData => {
    const addCocktail = await Cocktail.create(addCocktailData);
    return addCocktail;
  };
  static findCocktail = async ({ cocktail }) => {
    const findCocktail = await Cocktail.findOne({ name: cocktail });
    return findCocktail;
  };

  static modify = async (filter, updateCocktailData) => {
    const option = { returnOriginal: false };
    console.log(filter);
    console.log(updateCocktailData);
    const modifiedCocktail = await Cocktail.findByIdAndUpdate(filter, updateCocktailData, option);
    return modifiedCocktail;
  };
}

export { CocktailModel };
