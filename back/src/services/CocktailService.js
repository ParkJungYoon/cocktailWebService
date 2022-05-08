import { CocktailModel, LikeModel } from "../db";

class CocktailService {
  // 칵테일 조회(cocktail DB에서)
  static getCocktailList = async ({ offset, search, sort }) => {
    const cocktailList = await CocktailModel.getAllCocktail({ offset, search, sort });
    return cocktailList;
  };

  static getUserCocktailList = async ({ offset, userId, search, sort }) => {
    offset = offset ? offset : 0;
    const cocktailUserList = await CocktailModel.getAllCocktail({
      offset,
      search,
      sort,
    });
    return Promise.all(
      cocktailUserList.map(async (v, i) => {
        const cocktailName = v._id;
        const result = await LikeModel.getLikeOne({ userId, t: cocktailName });

        if (result !== null) {
          return { ...v, isLiked: true };
        } else {
          return { ...v, isLiked: false };
        }
      })
    );
  };

  // static getIncludedCocktail = async ({ word }) => {
  //   word = word.split("");

  //   let query = word.reduce(function (prev, current) {
  //     //(?=.*a)(?=.*a)
  //     return prev + `(?=.*` + current + `)`;
  //   }, "");
  //   query = new RegExp(query);
  //   const includedCocktail = await CocktailModel.getIncludedCocktail(query);
  //   return includedCocktail;
  // };

  static getCocktailLike = async () => {
    const cocktailLike = await CocktailModel.getCocktailLike();
    return cocktailLike;
  };

  // 유저가 좋아요 누른 전체 칵테일 정보 조회
  static getLikeList = async ({ userId, offset }) => {

    const result = await LikeModel.getPopLike({ userId, offset });
    return result;
    // const findAllCocktail = await CocktailModel.findAllCocktail();

    // return Promise.all(
    //   findAllCocktail.map(async (v) => {
    //     const cocktailName = v._id;
    //     const result = await LikeModel.getLikeOne({ userId, t: cocktailName });
    //     if (result !== null) {
    //       return { ...v, isLiked: true };
    //     }
    //   })
    // );
  }
  
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
