import { Router } from "express";
import { CocktailService } from "../services/CocktailService";
import { verifyToken } from "../middlewares/verifyToken";
import { type } from "express/lib/response";

const CocktailRouter = Router();

CocktailRouter.get("/cocktails", async (req, res, next) => {
  try {
    const cocktailList = await CocktailService.getCocktailList();
    res.status(200).json(cocktailList);

  } catch (error) {
    next(error);
  }
});

CocktailRouter.get("/cocktails/:name", async (req, res, next) => {
  try {
    if (req.params.name == null ) {
      throw new Error("칵테일 이름을 입력하세요.");
    }

    const { name } = req.params;

    const cocktail = await CocktailService.getCocktail({ name });

    if (cocktail == null) {
      throw new Error("칵테일 이름과 일치하는 데이터가 없습니다. - search");
    }

    res.status(200).json(cocktail);

  } catch (error) {
    next(error);
  }
});


CocktailRouter.get("/cocktailrank", async (req, res, next) => {
  try {
    const cocktail = await CocktailService.rank10Cocktail();

    if (cocktail == null) {
      throw new Error("데이터를 불러오는 데 실패했습니다.");
    }

    res.status(200).json(cocktail);

  } catch (error) {
    next(error);
  }
});

CocktailRouter.get("/cocktailmbti", async (req, res, next) => {
  try {
    console.log(req)

    if (req.body == null) {
      throw new Error("body에 데이터가 없습니다.");
    }

    const { mbti } = req.body;

    if ( typeof mbti !== "object") {
      throw new Error("데이터는 배열이어야 합니다.");
    }

    const cocktail = await CocktailService.mbtiCheck({ mbti });

    if (cocktail == null) {
      throw new Error("데이터를 불러오는 데 실패했습니다.");
    }

    res.status(200).json(cocktail);

  } catch (error) {
    next(error);
  }
});


CocktailRouter.delete("/cocktail/:name", verifyToken, async(req, res, next) => {
  try {
    if (req.params.name == null ) {
      throw new Error("칵테일 이름을 입력하세요.");
    }
    
    const { name } = req.params;

    const cocktailDelete = await CocktailService.deleteCocktail({ name });
    
    if (cocktailDelete == null) {
      throw new Error("칵테일 이름과 일치하는 데이터가 없습니다. - delete");
    }

    res.status(200).json(cocktailDelete);

  } catch (error) {
    next(error);
  }
})

CocktailRouter.post("/cocktail", verifyToken, async (req, res, next) => {
  try {

    if (req.body.name == null || req.body == null ) {
      throw new Error("요청 데이터를 한번 더 확인해주세요.");
    }
  
    const addData =  {
      name : req.body.name, 
      ingredient : req.body.ingredient, 
      imageUrl : req.body.imageUrl, 
      taste : req.body.taste, 
      description : req.body.description,
      userId : req.user 
    };
    
    const cocktail = await CocktailService.addCocktail(addData);

    if (cocktail == null) {
      throw new Error("칵테일 입력 도중 에러가 발생했습니다.");
    }

    res.status(200).json(cocktail);

  } catch (error) {
    next(error);
  }

});

CocktailRouter.post("/cocktail/:name", verifyToken, async (req, res, next) => {
  try {

    if (req.params.name == null) {
      throw new Error("칵테일 이름을 입력하세요.");
    }

    if (req.body == null) {
      throw new Error("수정할 칵테일 데이터가 없습니다.");
    }
    
    const originName = req.params;
    const user = req.user;
    
    const updateData = { 
      name : req.body.name, 
      ingredient : req.body.ingredient, 
      imageUrl : req.body.imageUrl, 
      taste : req.body.taste, 
      description : req.body.description,
    };
    
    const cocktail = await CocktailService.updateCocktail({ originName, user }, updateData);

    if (cocktail == null) {
      throw new Error("업데이트 도중 에러가 발생했습니다.");
    }

    res.status(200).json(cocktail);

  } catch (error) {
    next(error);
  }

});


export { CocktailRouter };
