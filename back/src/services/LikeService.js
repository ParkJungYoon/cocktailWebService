import { LikeModel } from "../db";
import { CocktailModel } from "../db";
class LikeService {
  static addLike = async ({ giveUserId, getCocktailId }) => {
    const name = await CocktailModel.findById({ getCocktailId });
    const newLike = await LikeModel.addLike({
      name: name.name,
      giveUserId,
      getCocktailId,
    });
    return newLike;
  };

  static getLikeList = async () => {
    const likeList = await LikeModel.getLikeList();
    return likeList;
  };

  static deleteLike = async ({ id }) => {
    const deleteCocktail = await LikeModel.deleteLike({ id });
    if (deleteCocktail === null) {
      const errorMessage = "해당 id의 좋아요가 없습니다.";
      return { errorMessage };
    }
    return deleteCocktail;
  };

  static getCocktailLike = async ({ id }) => {
    const cocktailLikeList = await LikeModel.getCocktailList({ id });
    return cocktailLikeList;
  };

  static getUserLike = async ({ id }) => {
    const userLikeList = await LikeModel.getUserLike({ id });
    return userLikeList;
  };
}

export { LikeService };
