import { CocktailModel } from "../db";

class dbService {
  // new Cocktail DB
  static addCocktail = async ({
    name,
    ingredient,
    imageUrl,
    taste,
    description,
  }) => {
    const addCocktailData = {
      name,
      ingredient,
      imageUrl,
      taste,
      description,
    };
    const addCocktail = await CocktailModel.addCocktail(addCocktailData);
    return addCocktail;
  };
  // 수정
  static modify = async ({
    cocktailId,
    name,
    ingredient,
    imageUrl,
    taste,
    description,
  }) => {
    const updateCocktailData = {
      name,
      ingredient,
      imageUrl,
      taste,
      description,
    };
    const filter = { _id: cocktailId };
    const modifiedCocktail = await CocktailModel.modify(
      filter,
      updateCocktailData
    );
    return modifiedCocktail;
  };
}

export { dbService };
