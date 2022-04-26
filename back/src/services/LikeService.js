import { LikeModel } from "../db";

class LikeService {
  static addLike = async ({ giveUserId, getCocktailId }) => {
    const newLike = await LikeModel.addLike({ giveUserId, getCocktailId });
    return newLike;
  };
}

export { LikeService };
