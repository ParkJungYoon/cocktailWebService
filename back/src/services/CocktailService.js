import { CocktailModel, LikeModel } from "../db";

class CocktailService {
  // 칵테일 조회(cocktail DB에서)
  static getCocktailList = async ({ offset }) => {
    const cocktailList = await CocktailModel.getAllCocktail({ offset });
    return cocktailList;
  };

  static getUserCocktailList = async ({ offset, userId }) => {
    const cocktailUserList = await CocktailModel.getAllCocktail({ offset });
    return Promise.all(
      cocktailUserList.map(async (v, i) => {
        const cocktailName = v.name
        const result = await LikeModel.getLikeOne({ userId, t : cocktailName  });
        
        if (result !== null) {
          return { ...v, isLiked: true};
        } else {
          return { ...v, isLiked: false};;
        }
      })
    );
  };

  static getCocktailLike = async () => {
    const cocktailLike = await CocktailModel.getCocktailLike();
    return cocktailLike;
  };

  static getCocktailRank10List = async () => {
    const cocktailList = await CocktailModel.getRank10Cocktail();
    return cocktailList;
  };

  static getCocktail = async ({ name }) => {
    const cocktail = await CocktailModel.findCocktail({ name });
    return cocktail;
  };

  static addCocktail = async (cocktail) => {
    const addResult = await CocktailModel.addCocktail(cocktail);
    return addResult;
  };

  static updateCocktail = async (filter, cocktail) => {
    const updateResult = await CocktailModel.modify(filter, cocktail);
    return updateResult;
  };

  static deleteCocktail = async ({ name }) => {
    const deleteResult = await CocktailModel.deleteCocktail({ name });
    return deleteResult;
  };

  static getIncludedCocktail = async ({ word }) => {
    word = word.split("");

    let query = word.reduce(function (prev, current) {
      //(?=.*a)(?=.*a)
      return prev + `(?=.*` + current + `)`;
    }, "");
    query = new RegExp(query);
    console.log(query);
    const includedCocktail = await CocktailModel.getIncludedCocktail(query);
    return includedCocktail;
  };

  /**
   *
   * @param {// [0 ,0, 0, 0] => [E / I , N / S, T / F, J / P]} mbti
   * A / B => 0 보다 크면 A, 작으면 B
   * @returns mbti 결과
   */

  static mbtiCheck = async ({ mbti }) => {
    let check = "";

    check += mbti[0] > 0 ? "E" : "I";
    check += mbti[1] > 0 ? "N" : "S";
    check += mbti[2] > 0 ? "T" : "F";
    check += mbti[3] > 0 ? "J" : "P";

    const result = {
      mbti: check,
      cocktail: "mojito",
    };

    return result;
  };
}

export { CocktailService };
