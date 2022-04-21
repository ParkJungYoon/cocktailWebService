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
}

export { CocktailModel };
