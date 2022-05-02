import { CommentModel } from "../db";

class CommentService {
  static async addComment({ boardId, writer, content }) {
    const newComment = { boardId, writer, content };
    const createdNewComment = await CommentModel.createComment({ newComment });
    return createdNewComment;
  }

  // 수정
  static async setComment({ commentId, writer, content }) {
    let comment = await CommentModel.findComment({ commentId });
    if (!comment) {
      const errorMessage = "댓글 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    if (String(comment.writer) !== writer) {
      const errorMessage = "댓글 작성자가 아닙니다. 수정할 수 없습니다.";
      return { errorMessage };
    }
    const filter = { _id: commentId };
    const updateData = { content };
    const modifiedComment = await CommentModel.modify(filter, updateData);
    return modifiedComment;
  }

  static async deleteComment({ commentId, writer, boardId }) {
    const comment = await CommentModel.findComment({ commentId });
    if (!comment) {
      const errorMessage = "해당 댓글이 없습니다.";
      return { errorMessage };
    }
    if (String(comment.writer) !== writer) {
      const errorMessage = "댓글 작성자가 아닙니다. 수정할 수 없습니다.";
      return { errorMessage };
    }
    const deletedComment = await CommentModel.delete({ commentId, boardId });
    return deletedComment;
  }
}

export { CommentService };
