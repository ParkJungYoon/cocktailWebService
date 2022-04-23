import { RankModel } from "../db";

class RankService {
  static top10 = async () => {
    const top10List = await RankModel.top10();
    return top10List;
  };
}

export { RankService };
