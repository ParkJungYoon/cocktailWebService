import { Cocktail } from "../schemas/cocktail";

class CocktailModel {
  static addCocktail = async (addCocktailData) => {
    const addCocktail = await Cocktail.create(addCocktailData);
    return addCocktail;
  };
  static findCocktail = async ({ name }) => {
    const findCocktail = await Cocktail.findOne({ name: name });
    return findCocktail;
  };

  static modify = async (filter, updateCocktailData) => {
    const option = { returnOriginal: false };
    const modifiedCocktail = await Cocktail.findByIdAndUpdate(
      filter,
      updateCocktailData,
      option
    );
    return modifiedCocktail;
  };
}

export { CocktailModel };
