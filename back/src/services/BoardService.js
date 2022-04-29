import { BoardModel } from "../db";

class BoardService {
  static create = async ({ writer, comment, context }) => {
    const newBoardData = { writer, comment, context };
    const newBoard = await BoardModel.create(newBoardData);
    return newBoard;
  };
}

export { BoardService };
