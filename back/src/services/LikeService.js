import { LikeModel } from "../db";

class LikeService {
  static addLike = async ({ giveUserId, getCocktailId }) => {
    const newLike = await LikeModel.addLike({ giveUserId, getCocktailId });
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
}

export { LikeService };
