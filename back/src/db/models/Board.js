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
}

export { BoardModel };
