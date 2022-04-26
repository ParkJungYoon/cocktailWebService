import { Like } from "../schemas/Like";

class LikeModel {
  static addLike = async ({ giveUserId, getCocktailId }) => {
    const newLike = await Like.create({ giveUserId, getCocktailId });
    return newLike;
  };
}

export { LikeModel };
