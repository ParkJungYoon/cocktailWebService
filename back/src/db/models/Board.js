import { Board } from "../schemas/board";

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
    const board = await Board.findOne({ _id: boardId });
    return board;
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
    return deleteBoard;
  };
}

export { BoardModel };
