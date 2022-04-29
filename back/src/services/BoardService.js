import { BoardModel } from "../db";

class BoardService {
  static create = async ({ writer, comment, context }) => {
    const newBoardData = { writer, comment, context };
    const newBoard = await BoardModel.create(newBoardData);
    return newBoard;
  };

  static delete = async ({ writer, boardId }) => {
    const board = await BoardModel.findById(boardId);

    if (String(board.writer) !== writer) {
      const errorMessage = "작성자가 아닙니다. 삭제 할 수 없습니다.";
      return { errorMessage };
    }

    if (!board) {
      const errorMessage = "삭제할 게시판이 없습니다.";
      return { errorMessage };
    }
    const deleteBoard = await BoardModel.delete(boardId);
    return deleteBoard;
  };
}

export { BoardService };
