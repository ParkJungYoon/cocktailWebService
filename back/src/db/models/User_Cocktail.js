import { UserCocktail } from "../schemas/user_cocktail";

class UserCocktailModel {
  static findUserCocktail = async ({ user_id }) => {
    const findUserCocktail = await UserCocktail.find({ user_id: user_id });
    return findUserCocktail;
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
