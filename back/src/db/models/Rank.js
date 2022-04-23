import { Rank } from "../schemas/rank";

class RankModel {
  static addCocktail = async (addCocktailData) => {
    const addCocktail = await Rank.create(addCocktailData);
    return addCocktail;
  };
  static top10 = async () => {
    const top10List = await Rank.find().where("rank").lte(10).sort("rank");
    return top10List;
  };
}

export { RankModel };
