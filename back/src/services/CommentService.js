import { CommentModel } from "../db";

class CommentService {
  static async addComment({ boardId, writer, content }) {
    const newComment = { boardId, writer, content };
    const createdNewComment = await CommentModel.createComment({ newComment });
    return createdNewComment;
  }

  static async getComment({ comment_id }) {
    const comment = await CommentModel.findById({ comment_id });

    if (!comment) {
      const errorMessage =
        "해당 댓글 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return comment;
  }

  // 유저가 생성한 모든 댓글
  static async getCommentsById({ user_id }) {
    const comments = await CommentModel.findByUserId({ user_id });
    return comments;
  }

  // 게시글의 모든 댓글
  static async getCommentsByBoardId({ boardId }) {
    const comments = await CommentModel.findByBoardId({ boardId });
    return comments;
  }

  // 수정
  static async setComment({ commentId, userId, content }) {
    let comment = await CommentModel.findById({ commentId });

    if (!comment) {
      const errorMessage = "댓글 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    if (String(comment.userId) !== userId) {
      const errorMessage = "댓글 작성자가 아닙니다. 수정할 수 없습니다.";
      return { errorMessage };
    }

    const filter = { _id: commentId };
    const updateData = { content };
    const modifiedComment = await CommentModel.modify(filter, updateData);
    return modifiedComment;
  }

  static async deleteComment({ commentId, userId }) {
    const comment = await CommentModel.findById({ commentId });
    if (!comment) {
      const errorMessage = "해당 댓글이 없습니다.";
      return { errorMessage };
    }
    if (String(comment.userId) !== userId) {
      const errorMessage = "댓글 작성자가 아닙니다. 수정할 수 없습니다.";
      return { errorMessage };
    }

    const deletedComment = await CommentModel.delete({ commentId });
    return deletedComment;
  }
}

export { CommentService };
