import { Like } from "../schemas/Like";

class LikeModel {
  static addLike = async ({ giveUserId, getCocktailId }) => {
    const newLike = await Like.create({ giveUserId, getCocktailId });
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
}

export { LikeModel };
