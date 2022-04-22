import { UserCocktail } from "../schemas/user_cocktail";

class UserCocktailModel {
  static findCocktail = async ({ name }) => {
    const findCocktail = await UserCocktail.findOne({ name: name });
    return findCocktail;
  };

  static addCocktail = async (addCocktailData) => {
    const addCocktail = await UserCocktail.create(addCocktailData);
    return addCocktail;
  };

  static modify = async (filter, updateCocktailData) => {
    const option = { returnOriginal: false };
    const modifiedCocktail = await UserCocktail.findByIdAndUpdate(
      filter,
      updateCocktailData,
      option
    );
    return modifiedCocktail;
  };

  static async delete({ _id }) {
    const deletedCocktail = await UserCocktail.deleteOne({
      _id: _id,
    });
    return deletedCocktail;
  }
}

export { UserCocktailModel };
