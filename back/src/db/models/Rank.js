import { Rank } from "../schemas/rank";

class RankModel {
  static addCocktail = async addCocktailData => {
    const addCocktail = await Rank.create(addCocktailData);
    return addCocktail;
  };
}

export { RankModel };
