import { Cocktail } from "../schemas/cocktail";

class CocktailModel {
  static addCocktail = async addCocktailData => {
    const addCocktail = await Cocktail.create(addCocktailData);
    return addCocktail;
  };
}

export { CocktailModel };
