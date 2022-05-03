import { Router } from "express";
import { BoardService } from "../services/BoardService";
import { verifyToken } from "../middlewares/verifyToken";
import { ImageModel } from "../db";
import { storage } from "../db/models/Image";
import multer from "multer";

const upload = multer({ storage: storage });
const BoardRouter = Router();

// 게시글 생성 (image 개수 제한 필요)
BoardRouter.post(
  "/board",
  verifyToken,
  upload.array("img"),
  async (req, res, next) => {
    try {
      const writer = req.user;
      const { title, content } = req.body;
      const images = req.images;
      const newBoard = await BoardService.create({
        writer,
        title,
        content,
        images,
      });
      res.status(200).json(newBoard);
    } catch (error) {
      next(error);
    }
  }
);

// 특정 게시글 조회
BoardRouter.get("/board/:id", async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const currentBoardInfo = await BoardService.getBoardInfo({ boardId });
    if (currentBoardInfo.errorMessage) {
      throw new Error(currentBoardInfo.errorMessage);
    }
    res.status(200).json(currentBoardInfo);
  } catch (error) {
    next(error);
  }
});

// 게시글 전체 조회
BoardRouter.get("/boardList", async (req, res, next) => {
  try {
    const boardList = await BoardService.boardList();
    res.status(200).json(boardList);
  } catch (error) {
    next(error);
  }
});

// 게시글 수정 (image 수정 구현 전)
BoardRouter.put("/board/:id", verifyToken, async (req, res, next) => {
  try {
    const writer = req.user;
    const title = req.body.title ?? null;
    const boardId = req.params.id;
    const content = req.body.content ?? null;
    const toUpdate = { title, content };

    const modifiedBoard = await BoardService.modify({
      writer,
      boardId,
      toUpdate,
    });
    res.status(200).json(modifiedBoard);
  } catch (error) {
    next(error);
  }
});

// 게시글 삭제
BoardRouter.delete("/board/:id", verifyToken, async (req, res, next) => {
  try {
    const writer = req.user;
    const boardId = req.params.id;
    const deletedBoard = await BoardService.delete({ writer, boardId });
    if (deletedBoard.errorMessage) {
      throw new Error(deletedBoard.errorMessage);
    }
    res.status(200).json(deletedBoard);
  } catch (error) {
    next(error);
  }
});

export { BoardRouter };
