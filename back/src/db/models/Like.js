import { Like } from "../schemas/Like";

class LikeModel {
  static addLike = async ({ name, giveUserId, getCocktailId }) => {
    const newLike = await Like.create({ name, giveUserId, getCocktailId });
    return newLike;
  };

  static getLikeList = async () => {
    const likeList = await Like.find();
    return likeList;
  };

  static getLike = async ({ giveUserId, getCocktailId }) => {
    const like = await Like.findOne({ giveUserId, getCocktailId });
    return like;
  };

  static deleteLike = async ({ giveUserId, getCocktailId }) => {
    const deleteLike = await Like.findOneAndRemove({
      giveUserId,
      getCocktailId,
    });
    return deleteLike;
  };

  static getCocktailList = async ({ id }) => {
    const cocktailLikeList = await Like.find()
      .where("getCocktailId")
      .equals(id);
    return cocktailLikeList;
  };

  static getUserLike = async ({ userId }) => {
    const userLikeList = await Like.find().where("giveUserId").equals(userId);
    return userLikeList;
  };

  static getLikeOne = async ({ userId, t }) => {
    const userLikeList = await Like.findOne({ giveUserId: userId, name: t });
    return userLikeList;
  };
}

export { LikeModel };
