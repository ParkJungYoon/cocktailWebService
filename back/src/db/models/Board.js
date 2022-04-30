import { Board } from "../schemas/board";

class BoardModel {
  static create = async (newBoardData) => {
    const newBoard = await Board.create(newBoardData);
    return newBoard;
  };

  static findById = async (boardId) => {
    const board = await Board.findById({ _id: boardId });
    return board;
  };

  static delete = async (boardId) => {
    const deleteBoard = await Board.findByIdAndDelete({ _id: boardId });
    return deleteBoard;
  };

  static modify = async (filter, updateData) => {
    const option = { returnOriginal: false };
    const modifiedBoard = await Board.findOneAndUpdate(
      filter,
      updateData,
      option
    );
    return modifiedBoard;
  };

  static boardList = async () => {
    const boardList = await Board.find();
    return boardList;
  };
}

export { BoardModel };
