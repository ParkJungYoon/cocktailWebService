import { Router } from "express";
import { CommentService } from "../services/CommentService";
import { verifyToken } from "../middlewares/verifyToken";

const CommentRouter = Router();

// 댓글 작성 API
CommentRouter.post("/board/comment", verifyToken, async (req, res, next) => {
  try {
    // 토큰에 있는 유저 정보로 userId 저장
    const userId = req.user;
    const { boardId, content } = req.body;
    const newComment = await CommentService.addComment({
      boardId,
      userId,
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

// 특정 게시판 댓글 목록 조회 API
CommentRouter.get("/board/comments/:boardId", async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const comments = await CommentService.getCommentsByBoardId({ boardId });

    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
});

// 특정 댓글 수정 API
CommentRouter.put("/board/comment/:id", verifyToken, async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const userId = req.user;
    const { content } = req.body;

    const updatedComment = await CommentService.setComment({
      commentId,
      userId,
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

// 특정 댓글 삭제 API
CommentRouter.delete(
  "/board/comment/:id",
  verifyToken,
  async (req, res, next) => {
    try {
      const commentId = req.params.id;
      const userId = req.user;
      const deletedComment = await CommentService.deleteComment({
        commentId,
        userId,
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
