import { Cocktail } from "../schemas/cocktail";

class CocktailModel {
  static findCocktail = async ({ name }) => {
    const findCocktail = await Cocktail.findOne({ name: name });
    return findCocktail;
  };

  static addCocktail = async (data) => {
    const addCocktail = await Cocktail.create(data);
    return addCocktail;
  };
}

export { CocktailModel };
