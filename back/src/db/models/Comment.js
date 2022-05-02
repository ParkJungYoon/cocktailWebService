import { Comment } from "../schemas/comment";
import { Board } from "../schemas/board";

class CommentModel {
  static async createComment({ newComment }) {
    const createdNewComment = await Comment.create(newComment);
    const push = await Board.findOneAndUpdate(
      { _id: newComment.boardId },
      { $push: { comment: createdNewComment._id } }
    );
    return createdNewComment;
  }

  static async findById({ commentId }) {
    const comment = await Comment.findOne({ _id: commentId });
    return comment;
  }

  static async findByUserId({ user_id }) {
    const comments = await Comment.find({ user_id });
    return comments;
  }

  static async findByBoardId({ boardId }) {
    const comments = await Comment.find({ boardId });
    return comments;
  }

  static modify = async (filter, updateData) => {
    const option = { returnOriginal: false };
    const modifiedComment = await Comment.findOneAndUpdate(
      filter,
      updateData,
      option
    );
    return modifiedComment;
  };

  static async delete({ commentId }) {
    const deletedComment = await Comment.deleteOne({ _id: commentId });
    return deletedComment;
  }
}

export { CommentModel };
