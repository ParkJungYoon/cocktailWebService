import { UserCocktail } from "../schemas/user_cocktail";

class UserCocktailModel {
  // user_id로 조회
  static findUserCocktail = async ({ user_id }) => {
    const findUserCocktail = await UserCocktail.find({ user_id: user_id });
    return findUserCocktail;
  };
  // 게시글 _id로 조회
  static findById = async ({ id }) => {
    const findUserCocktail = await UserCocktail.find({ _id: id });
    return findUserCocktail;
  };

  static addCocktail = async (addCocktailData) => {
    const addCocktail = await UserCocktail.create(addCocktailData);
    return addCocktail;
  };

  static update = async (filter, updateCocktailData) => {
    const option = { returnOriginal: false };
    const updatedCocktail = await UserCocktail.findByIdAndUpdate(
      filter,
      updateCocktailData,
      option
    );
    return updatedCocktail;
  };

  static async delete({ _id: id }) {
    const deletedCocktail = await UserCocktail.deleteOne({
      _id: id,
    });
    return deletedCocktail;
  }
}

export { UserCocktailModel };
