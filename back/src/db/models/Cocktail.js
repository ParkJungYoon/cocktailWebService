import { Cocktail } from "../schemas/cocktail";

class CocktailModel {
  static findCocktail = async ({ name }) => {
    const findCocktail = await Cocktail.findOne({ name: name });
    return findCocktail;
  };

  static getRank10Cocktail = async () => {
    const cocktails = await Cocktail.find({ rank: { $ne: null } }).populate({
      path: "rank",
      match: { rank: { $lte: 10 } },
    });
    const rankCocktail = cocktails.filter((v, i) => {
      return v.rank != null;
    });
    const sortCocktail = rankCocktail.sort((A, B) => {
      return A.rank.rank - B.rank.rank;
    });
    return sortCocktail;
  };

  static getCocktailLike = async () => {
    const cocktailLiked = await Cocktail.find(
      {},
      { name: true, likes: true, _id: false }
    );
    return cocktailLiked;
  };

  static addCocktail = async (cocktail) => {
    const addCocktail = await Cocktail.create(cocktail);
    return addCocktail;
  };

  static getAllCocktail = async ({ offset, limit = 20 }) => {
    const result = await Cocktail.find()
      .populate("rank")
      .skip(offset > 0 ? (offset - 1) * limit : 0)
      .limit(limit);
    return result;
  };

  static modify = async (filter, cocktail) => {
    const { originName, user } = filter;

    const option = { returnOriginal: false };
    const modifiedCocktail = await Cocktail.findOneAndUpdate(
      {
        name: originName,
        userId: user,
      },
      cocktail,
      option
    );
    return modifiedCocktail;
  };

  static deleteCocktail = async ({ name }) => {
    const result = await Cocktail.findOneAndDelete({ name });
    return result;
  };

  static findById = async ({ getCocktailId }) => {
    const cocktail = await Cocktail.findById({ _id: getCocktailId }).select(
      "name"
    );
    return cocktail;
  };

  static likeCocktail = async ({ getCocktailId }) => {
    const updateC = await Cocktail.findOneAndUpdate(
      { _id: getCocktailId },
      { $inc: { likes: 1 } }
    );

    if (updateC !== null) {
      return true;
    }
    return false;
  };

  static unLikeCocktail = async ({ getCocktailId }) => {
    const updateC = await Cocktail.findOneAndUpdate(
      { _id: getCocktailId },
      { $inc: { likes: -1 } }
    );

    if (updateC !== null) {
      return true;
    }
    return false;
  };
}

export { CocktailModel };
