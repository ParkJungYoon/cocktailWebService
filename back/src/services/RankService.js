import { RankModel } from "../db";

class RankService {
  static top10 = async () => {
    const top10List = await RankModel.top10();
    return top10List;
  };

  static cocktailRank = async ({ name }) => {
    const cocktail = await RankModel.cocktailRank({ name });
    return cocktail;
  };
}

export { RankService };
