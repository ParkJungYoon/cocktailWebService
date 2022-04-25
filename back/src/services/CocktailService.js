import { CocktailModel, UserCocktailModel, CocktailInfoModel } from "../db";

class CocktailService {
  // 칵테일 조회(cocktail DB에서)
  static getCocktailInfo = async ({ name }) => {
    const cocktailInfo = await CocktailModel.findCocktail({ name });
    if (!cocktailInfo) {
      const errorMessage =
        "해당 칵테일 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return cocktailInfo;
  };
  // 칵테일 조회(cocktailInfo DB에서)
  static getCocktailList = async () => {
    const cocktailList = await CocktailInfoModel.findCocktail();

    return cocktailList;
  };
  // 유저 칵테일 조회 (userCocktail DB에서)
  static getUserCocktailInfo = async ({ user_id }) => {
    const userCocktailInfo = await UserCocktailModel.findUserCocktail({
      user_id,
    });
    if (!userCocktailInfo) {
      const errorMessage =
        "해당 유저의 칵테일 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return userCocktailInfo;
  };
  // 유저 칵테일 추가
  static addCocktail = async ({
    name,
    ingredient,
    description,
    imageUrl,
    user_id,
  }) => {
    const addCocktailData = {
      name,
      ingredient,
      description,
      imageUrl,
      user_id,
    };
    const addCocktail = await UserCocktailModel.addCocktail(addCocktailData);
    return addCocktail;
  };
  // 유저 칵테일 수정
  static update = async ({
    _id: id,
    name,
    ingredient,
    description,
    imageUrl,
    user_id,
  }) => {
    const updateCocktailData = {
      _id: id,
      name,
      ingredient,
      description,
      imageUrl,
      user_id,
    };
    const filter = { _id: id };
    const updatedCocktail = await UserCocktailModel.update(
      filter,
      updateCocktailData
    );
    return updatedCocktail;
  };
  // 유저 칵테일 삭제
  static async deleteCocktail({ id }) {
    const userCocktail = await UserCocktailModel.findById({ id });

    if (!userCocktail) {
      const errorMessage =
        "삭제할 유저 칵테일 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const deletedCocktail = await UserCocktailModel.delete({ _id: id });
    return deletedCocktail;
  }
}

export { CocktailService };
