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

  static commentCount = async ({ userId }) => {
    const count = await Comment.find({ writer: userId }).countDocuments();
    return count;
  };

  static async findComment({ commentId }) {
    const comment = await Comment.findOne({ _id: commentId });
    return comment;
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

  static async delete({ commentId, boardId }) {
    const deletedComment = await Comment.deleteOne({ _id: commentId });
    const pull = await Board.findOneAndUpdate(
      { _id: boardId },
      { $pull: { comment: commentId } }
    );
    return deletedComment;
  }
  static userCommentList = async ({ userId }) => {
    const CommentList = await Comment.find({ writer: userId });
    return CommentList;
  };
  static updateUserComment = async ({ userId }) => {
    let comment = await this.userCommentList({ userId });
    console.log(comment);
    if (comment) {
      comment = await Comment.updateMany(
        { writer: userId },
        { $set: { writer: null } }
      );
      return comment;
    } else {
      return;
    }
  };
}

export { CommentModel };
