import { Board } from "../schemas/board";
import { Comment } from "../schemas/comment";

class BoardModel {
  static create = async (newBoardData) => {
    const newBoard = await Board.create(newBoardData);
    return newBoard;
  };

  static boardList = async () => {
    const boardList = await Board.find().populate("writer").lean();
    return boardList;
  };

  static boardCount = async ({ userId }) => {
    const count = await Board.find({ writer: userId }).countDocuments();
    return count;
  };

  static views = async ({ boardId }) => {
    const update = await Board.findOneAndUpdate(
      { _id: boardId },
      { $inc: { visited: 1 } }
    );

    if (update !== null) {
      return true;
    }
    return false;
  };

  static findBoard = async ({ boardId }) => {
    const board = await Board.findOne({ _id: boardId })
      .populate({
        path: "comment",
        populate: {
          path: "writer",
        },
      })
      .populate("writer")
      .lean();
    return board;
  };

  static userBordList = async ({ userId }) => {
    const boardList = await Board.find({ writer: userId }).lean();
    return boardList;
  };

  static updateUserBoard = async ({ userId }) => {
    let board = await this.userBordList({ userId });
    if (board) {
      board = await Board.updateMany(
        { writer: userId },
        { $set: { writer: null } }
      ).lean();
      return board;
    } else {
      return;
    }
  };

  static modify = async ({ boardId, newValues }) => {
    const filter = { _id: boardId };
    const update = { $set: newValues };
    const option = { returnOriginal: false };
    const modifiedBoard = await Board.findOneAndUpdate(
      filter,
      update,
      option
    ).lean();
    return modifiedBoard;
  };

  static delete = async ({ boardId }) => {
    const deleteBoard = await Board.findByIdAndDelete({ _id: boardId }).lean();
    await Comment.deleteMany({ boardId });
    return deleteBoard;
  };
}

export { BoardModel };
