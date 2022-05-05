import { Router } from "express";
import { CommentService } from "../services/CommentService";
import { verifyToken } from "../middlewares/verifyToken";

const CommentRouter = Router();

// 댓글 생성
CommentRouter.post("/board/comment", verifyToken, async (req, res, next) => {
  try {
    const writer = req.user;
    const { boardId, content } = req.body;
    const newComment = await CommentService.addComment({
      boardId,
      writer,
      content,
    });
    if (newComment.errorMessage) {
      throw new Error(newComment.errorMessage);
    }
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
});

// 댓글 수정
CommentRouter.put("/board/comment/:id", verifyToken, async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const writer = req.user;
    const { content } = req.body;

    const updatedComment = await CommentService.setComment({
      commentId,
      writer,
      content,
    });
    if (updatedComment.errorMessage) {
      throw new Error(updatedComment.errorMessage);
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    next(error);
  }
});

// 댓글 삭제
CommentRouter.post(
  "/board/comment/:id",
  verifyToken,
  async (req, res, next) => {
    try {
      const commentId = req.params.id;
      const writer = req.user;
      const { boardId } = req.body;
      const deletedComment = await CommentService.deleteComment({
        commentId,
        writer,
        boardId,
      });
      if (deletedComment.errorMessage) {
        throw new Error(deletedComment.errorMessage);
      }
      res.status(200).json(deletedComment);
    } catch (error) {
      next(error);
    }
  }
);

export { CommentRouter };
