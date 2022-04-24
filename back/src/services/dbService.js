import { CocktailInfoModel } from "../db";

class dbService {
  // new Cocktail DB
  static addCocktail = async ({
    name,
    ingredient,
    imageUrl,
    flavor,
    description,
    alcohol,
  }) => {
    const addCocktailData = {
      name,
      ingredient,
      imageUrl,
      flavor,
      description,
      alcohol,
    };
    const addCocktail = await CocktailInfoModel.addCocktail(addCocktailData);
    return addCocktail;
  };
  // 수정
  static modify = async ({
    cocktailId,
    name,
    ingredient,
    imageUrl,
    flavor,
    description,
    alcohol,
  }) => {
    const updateCocktailData = {
      name,
      ingredient,
      imageUrl,
      flavor,
      description,
      alcohol,
    };
    const filter = { _id: cocktailId };
    const modifiedCocktail = await CocktailInfoModel.modify(
      filter,
      updateCocktailData
    );
    return modifiedCocktail;
  };
}

export { dbService };
