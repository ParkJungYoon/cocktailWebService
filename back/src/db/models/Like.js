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

  static deleteLike = async ({ id }) => {
    const deleteLike = await Like.findByIdAndRemove({ _id: id });
    return deleteLike;
  };

  static getCocktailList = async ({ id }) => {
    const cocktailLikeList = await Like.find()
      .where("getCocktailId")
      .equals(id);
    return cocktailLikeList;
  };

  static getUserLike = async ({ id }) => {
    const userLikeList = await Like.find().where("giveUserId").equals(id);
    return userLikeList;
  };
}

export { LikeModel };
