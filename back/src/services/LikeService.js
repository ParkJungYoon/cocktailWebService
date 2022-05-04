import { LikeModel, CocktailModel, db } from "../db";

class LikeService {
  static addLike = async ({ giveUserId, getCocktailId }) => {
    const session = await db.startSession();

    try {
      session.startTransaction();

      const name = await CocktailModel.findById({ getCocktailId });

      const newLike = await LikeModel.addLike({
        name: name.name,
        giveUserId,
        getCocktailId,
      });

      await CocktailModel.likeCocktail({ getCocktailId });

      await session.commitTransaction();
      return newLike;
    } catch (e) {
      await session.abortTransaction();

      const errorMessage = "좋아요를 생성하는 데 실패했습니다.";
      return { errorMessage };
    } finally {
      session.endSession();
    }
  };

  static getLikeList = async () => {
    const likeList = await LikeModel.getLikeList();
    return likeList;
  };

  static deleteLike = async ({ giveUserId, getCocktailId }) => {
    const checkLike = await LikeModel.getLike({ giveUserId, getCocktailId });

    if (checkLike == null) {
      const errorMessage =
        "좋아요를 하지 않았습니다. 먼저 좋아요를 눌러주세요.";
      return { errorMessage };
    }

    const session = await db.startSession();

    try {
      session.startTransaction();

      const deleteCocktail = await LikeModel.deleteLike({
        giveUserId,
        getCocktailId,
      });
      if (deleteCocktail === null) {
        const errorMessage = "해당 id의 좋아요가 없습니다.";
        return { errorMessage };
      }

      await CocktailModel.unLikeCocktail({ getCocktailId });

      await session.commitTransaction();

      return deleteCocktail;
    } catch (e) {
      await session.abortTransaction();

      const errorMessage = "좋아요를 삭제하는 데 실패했습니다.";
      return { errorMessage };
    } finally {
      session.endSession();
    }
  };

  static getCocktailLike = async ({ id }) => {
    const cocktailLikeList = await LikeModel.getCocktailList({ id });
    return cocktailLikeList;
  };

  static getUserLike = async ({ userId }) => {
    const userLikeList = await LikeModel.getUserLike({ userId });
    return userLikeList;
  };
  static findUserCocktailLike = async ({ giveUserId, getCocktailId }) => {
    const userLikeList = await LikeModel.getLike({
      giveUserId,
      getCocktailId,
    });
    return userLikeList;
  };
}

export { LikeService };
