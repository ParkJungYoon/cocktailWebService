import { BoardModel } from "../db";

class BoardService {
  static create = async ({ writer, context, images }) => {
    const newBoardData = { writer, context, images };
    const newBoard = await BoardModel.create(newBoardData);
    return newBoard;
  };

  static delete = async ({ writer, boardId }) => {
    const board = await BoardModel.findById(boardId);
    if (!board) {
      const errorMessage = "삭제할 게시판이 없습니다.";
      return { errorMessage };
    }
    if (String(board.writer) !== writer) {
      const errorMessage = "작성자가 아닙니다. 삭제 할 수 없습니다.";
      return { errorMessage };
    }

    const deleteBoard = await BoardModel.delete(boardId);
    return deleteBoard;
  };

  static modify = async ({ writer, boardId, context }) => {
    const board = await BoardModel.findById(boardId);

    if (!board) {
      const errorMessage = "수정할 게시판이 없습니다.";
      return { errorMessage };
    }

    if (String(board.writer) !== writer) {
      const errorMessage = "작성자가 아닙니다. 수정 할 수 없습니다.";
      return { errorMessage };
    }

    const filter = { _id: boardId };
    const updateData = { context };
    const modifiedBoard = await BoardModel.modify(filter, updateData);

    return modifiedBoard;
  };

  static boardList = async () => {
    const boardList = await BoardModel.boardList();
    return boardList;
  };
}

export { BoardService };
