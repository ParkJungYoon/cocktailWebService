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
}

export { CocktailService };
