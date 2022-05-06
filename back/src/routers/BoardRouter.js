import { Router } from "express";
import { BoardService } from "../services/BoardService";
import { verifyToken, verify } from "../middlewares/verifyToken";
import { ImageModel } from "../db";
import { storage } from "../db/models/Image";
import multer from "multer";

const upload = multer({ storage: storage });
const BoardRouter = Router();

// 게시글 생성 (image 개수 제한 필요)
BoardRouter.post(
  "/board",
  verifyToken,
  upload.array("img", 2),
  async (req, res, next) => {
    try {
      const writer = req.user;
      const { title, content } = req.body;
      const images = req?.images;

      const getImage = await ImageModel.getImg({ fileNameList: images });

      const newBoard = await BoardService.create({
        writer,
        title,
        content,
        images,
      });
      res.status(200).json({ ...newBoard._doc, data: getImage });
    } catch (error) {
      next(error);
    }
  }
);

const viewObj = new Object();
// 특정 게시글 조회
BoardRouter.get("/board/:id", verify, async (req, res, next) => {
  try {
    const boardId = req.params.id;
    // token이 없는 경우에는 userId == null
    const userId = req.user;
    const currentBoardInfo = await BoardService.getBoardInfo({
      viewObj,
      userId,
      boardId,
    });
    if (currentBoardInfo.errorMessage) {
      throw new Error(currentBoardInfo.errorMessage);
    }
    const getImage = await ImageModel.getImg({
      fileNameList: currentBoardInfo.images,
    });
    res.status(200).json({ ...currentBoardInfo, data: getImage });
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
BoardRouter.put(
  "/board/:id",
  verifyToken,
  upload.array("img", 2),
  async (req, res, next) => {
    try {
      const writer = req.user;
      const title = req.body.title ?? null;
      const boardId = req.params.id;
      const content = req.body.content ?? null;

      const images = req?.images;

      const toUpdate = { title, content, images };

      const modifiedBoard = await BoardService.modify({
        writer,
        boardId,
        toUpdate,
      });

      const getImage = await ImageModel.getImg({ fileNameList: images });

      res.status(200).json({ ...modifiedBoard, data: getImage });
    } catch (error) {
      next(error);
    }
  }
);

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
