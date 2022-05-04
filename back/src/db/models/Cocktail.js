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

  static getAllCocktail = async ({ offset, search, sort, limit = 20 }) => {
    const count = await Cocktail.countDocuments();
    console.log(search)
    let result;

    if (search !== undefined) {
      result = await Cocktail.find({ $text: { $search: search } }).lean();  
      if (result.length === 1) {
        return result;
      } else {
        search = search.split("").join(".*");
        search = ".*" + search + ".*";
        const re = new RegExp(search);
        const cocktailList = await Cocktail.find({
          name: { $regex: re },
        }).populate("rank")
          .skip(offset > 0 ? (offset - 1) * limit : 0)
          .limit(limit)
          .lean()
          .sort({ name: 1 });
        return cocktailList;
      }
    }
    else {
      result = await Cocktail.find().populate("rank")
      .skip(offset > 0 ? (offset - 1) * limit : 0)
      .limit(limit)
      .lean()
      .sort({ name: 1 });;
    }

    return result;
  };

  static getIncludedCocktail = async (query) => {
    const cocktailList = await Cocktail.find({
      name: { $regex: query },
    });
    return cocktailList;
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
