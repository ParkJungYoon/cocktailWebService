import { Board } from "../schemas/board";
import { Comment } from "../schemas/comment";

class BoardModel {
  static create = async (newBoardData) => {
    const newBoard = await Board.create(newBoardData);
    return newBoard;
  };

  static boardList = async () => {
    const boardList = await Board.find();
    return boardList;
  };

  static findBoard = async ({ boardId }) => {
    const board = await Board.findOne({ _id: boardId })
      .populate("comment")
      .populate("writer");
    return board;
  };

  static userBordList = async ({ userId }) => {
    const boardList = await Board.find({ writer: userId });
    return boardList;
  };

  static updateUserBoard = async ({ userId }) => {
    let board = await this.userBordList({ userId });
    if (board) {
      board = await Board.updateMany(
        { writer: userId },
        { $set: { writer: null } }
      );
      return board;
    } else {
      return;
    }
  };

  static modify = async ({ boardId, newValues }) => {
    const filter = { _id: boardId };
    const update = { $set: newValues };
    const option = { returnOriginal: false };
    const modifiedBoard = await Board.findOneAndUpdate(filter, update, option);
    return modifiedBoard;
  };

  static delete = async ({ boardId }) => {
    const deleteBoard = await Board.findByIdAndDelete({ _id: boardId });
    await Comment.deleteMany({ boardId });
    return deleteBoard;
  };
}

export { BoardModel };
