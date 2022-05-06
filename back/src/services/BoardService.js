import { BoardModel, ImageModel } from "../db";

class BoardService {
  static create = async ({ writer, title, content, images }) => {
    const newBoardData = { writer, title, content, images };
    const newBoard = await BoardModel.create(newBoardData);
    return newBoard;
  };

  static getBoardInfo = async ({ viewObj, userId, boardId }) => {
    let board = await BoardModel.findBoard({ boardId });
    if (!board) {
      const errorMessage = "해당 게시글이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    // 조회수
    if (!viewObj[boardId]) {
      viewObj[boardId] = [];
    }
    if (!userId) {
      const view = await BoardModel.views({ boardId });
    } else if (viewObj[boardId].indexOf(userId) === -1) {
      viewObj[boardId].push(userId);
      await BoardModel.views({ boardId });
      //24시간이 지나면 배열에서 삭제
      setTimeout(() => {
        viewObj[boardId].splice(viewObj[boardId].indexOf(userId), 1);
      }, 864000);
      for (let i in viewObj) {
        if (i.length == 0) {
          delete viewObj.i;
        }
      }
    }
    board = await BoardModel.findBoard({ boardId });
    return board;
  };

  static boardList = async () => {
    const boardList = await BoardModel.boardList();
    return boardList;
  };

  static modify = async ({ writer, boardId, toUpdate }) => {
    const board = await BoardModel.findBoard({ boardId });
    if (!board) {
      const errorMessage = "수정할 게시판이 없습니다.";
      return { errorMessage };
    }

    if (String(board.writer._id) !== writer) {
      const errorMessage = "작성자가 아닙니다. 수정 할 수 없습니다.";
      return { errorMessage };
    }
    if (!toUpdate.title) {
      toUpdate.title = board.title;
    }
    if (!toUpdate.content) {
      toUpdate.content = board.content;
    }
    const images = board.images;
    if (!toUpdate.images) {
      toUpdate.images = images;
    } else {
      await ImageModel.deleteArray({ fileNameList: images });
    }
    const newValues = {
      title: toUpdate.title,
      content: toUpdate.content,
      images: toUpdate.images,
    };
    const modifiedBoard = await BoardModel.modify({
      boardId,
      newValues,
    });

    return modifiedBoard;
  };

  static delete = async ({ writer, boardId }) => {
    const board = await BoardModel.findBoard({ boardId });
    if (!board) {
      const errorMessage = "삭제할 게시판이 없습니다.";
      return { errorMessage };
    }
    if (String(board.writer._id) !== writer) {
      const errorMessage = "작성자가 아닙니다. 삭제 할 수 없습니다.";
      return { errorMessage };
    }
    const deletedBoard = await BoardModel.delete({ boardId });
    const images = board.images;
    await ImageModel.deleteArray({ fileNameList: images });
    return deletedBoard;
  };
}

export { BoardService };
