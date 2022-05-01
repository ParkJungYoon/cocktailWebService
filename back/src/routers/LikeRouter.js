import { Router } from "express";
import { LikeService } from "../services/LikeService";
import { verifyToken } from "../middlewares/verifyToken";
const LikeRouter = Router();

LikeRouter.post("/like/:id", verifyToken, async (req, res, next) => {
  try {
    const giveUserId = req.user;
    const getCocktailId = req.params.id;
    const userLike = await LikeService.findUserCocktailLike({
      giveUserId,
      getCocktailId,
    });
    if (userLike) {
      throw new Error("이미 좋아요를 누른 칵테일입니다.");
    }
    const newLike = await LikeService.addLike({ giveUserId, getCocktailId });
    res.status(200).json(newLike);
  } catch (error) {
    next(error);
  }
});

LikeRouter.delete("/like/:id", verifyToken, async (req, res, next) => {
  try {
    const giveUserId = req.user;
    const getCocktailId = req.params.id;
    const deleteLike = await LikeService.deleteLike({
      giveUserId,
      getCocktailId,
    });
    if (deleteLike.errorMessage) {
      throw new Error(deleteLike.errorMessage);
    }
    res.status(200).json(deleteLike);
  } catch (error) {
    next(error);
  }
});

LikeRouter.get("/likeList", async (req, res, next) => {
  try {
    const likeList = await LikeService.getLikeList();
    res.status(200).json(likeList);
  } catch (error) {
    next(error);
  }
});

LikeRouter.get("/cocktailLike/:id", verifyToken, async (req, res, next) => {
  try {
    const id = req.params.id;
    const cocktailLikeList = await LikeService.getCocktailLike({ id });
    res.status(200).json(cocktailLikeList);
  } catch (error) {
    next(error);
  }
});

LikeRouter.get("/userLike", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const userLikeList = await LikeService.getUserLike({ userId });
    res.status(200).json(userLikeList);
  } catch (error) {
    next(error);
  }
});
export { LikeRouter };
