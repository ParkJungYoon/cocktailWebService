import { CocktailModel } from "../db";

class CocktailService {
  // db 조회
  static getCocktailInfo = async ({ name }) => {
    console.log(name);
    const cocktail = await CocktailModel.findCocktail({ name });
    if (!cocktail) {
      const errorMessage =
        "해당 칵테일 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return cocktail;
  };
  // 유저 칵테일 추가
  static addCocktail = async ({
    name,
    ingredient,
    description,
    imageUrl,
    rank,
  }) => {
    const addCocktailData = { name, ingredient, imageUrl, user_id };
    const addCocktail = await UserCocktailModel.addCocktail(addCocktailData);
    return addCocktail;
  };
  // 유저 칵테일 수정
  static modify = async ({ _id, name, ingredient, imageUrl, user_id }) => {
    const updateCocktailData = { _id, name, ingredient, imageUrl, user_id };
    const filter = { _id: _id };
    const modifiedCocktail = await UserCocktailModel.modify(
      filter,
      updateCocktailData
    );
    return modifiedCocktail;
  };
  // 유저 칵테일 삭제
}

export { CocktailService };
