import { Cocktail } from "../schemas/cocktail";

class CocktailModel {
  static findCocktail = async ({ name }) => {
    const findCocktail = await Cocktail.findOne({ name: name });
    return findCocktail;
  };

  static addCocktail = async (cocktail) => {
    const addCocktail = await Cocktail.create(cocktail);
    return addCocktail;
  };

  static getAllCocktail = async () => {
    const result = await Cocktail.find().populate("rank");
    return result;
  };

  static modify = async (filter, cocktail) => {
    const { originName, user } = filter;

    const option = { returnOriginal: false };
    const modifiedCocktail = await Cocktail.findByIdAndUpdate(
      {
        name: originName,
        userId: user,
      },
      cocktail,
      option
    );
    return modifiedCocktail;
  };

  static deleteCocktail = async ({ name }) => {
    const result = await Cocktail.findOneAndDelete({ name });
    console.log(result);
    return result;
  };

  static findById = async ({ getCocktailId }) => {
    const cocktail = await Cocktail.findById({ _id: getCocktailId }).select(
      "name"
    );
    return cocktail;
  };
}

export { CocktailModel };
