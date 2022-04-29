import { Board } from "../schemas/board";

class BoardModel {
  static create = async (newBoardData) => {
    const newBoard = await Board.create(newBoardData);
    return newBoard;
  };
}

export { BoardModel };
