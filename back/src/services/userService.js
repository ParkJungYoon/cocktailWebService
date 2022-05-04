import { UserModel, TokenModel, BoardModel, CommentModel, LikeModel } from "../db";

import { hashPassword } from "../utils/hashPassword";
import { makeToken, makeRefreshToken } from "../utils/makeToken";

class userService {
  static addUser = async ({ email, password, name }) => {
    const user = await UserModel.findByEmail({ email });
    if (user) {
      const errorMessage = "중복된 이메일입니다. 다른 이메일을 입력해주세요";
      return { errorMessage };
    }
    const hashedPassword = hashPassword(password);
    const newUserData = { email, password: hashedPassword, name };
    const newUser = await UserModel.addUser(newUserData);
    return newUser;
  };

  static delete = async ({ userId }) => {
    const deletedUser = await UserModel.delete({ userId });
    if (!deletedUser) {
      const errorMessage =
        "해당 이메일로 가입된 내역이 없습니다. 다시 한 번 확인해주세요";
      return { errorMessage };
    }
    // 탈퇴 시 게시글, 댓글 writer null값으로 변경
    await BoardModel.updateUserBoard({ userId });
    await CommentModel.updateUserComment({ userId });

    return deletedUser;
  };

  static modify = async ({ userId, toUpdate }) => {
    const user = await UserModel.findByUserId({ userId });
    if (!user) {
      const errorMessage = "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    if (!toUpdate.email) {
      toUpdate.email = user.email;
    } else {
      const email = toUpdate.email;
      const validation = email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!validation) {
        const errorMessage =
          "올바른 이메일 형식이 아닙니다. 다시 입력해주세요.";
        return errorMessage;
      }
      const userEmail = await UserModel.findByEmail({ email });
      if (userEmail) {
        const errorMessage =
          "이미 존재하는 이메일 입니다. 다른 이메일을 입력해주세요";
        return { errorMessage };
      }
    }
    if (!toUpdate.password) {
      toUpdate.password = user.password;
    } else {
      toUpdate.password = hashPassword(toUpdate.password);
    }
    if (!toUpdate.name) {
      toUpdate.name = user.name;
    }
    const newValues = {
      email: toUpdate.email,
      password: toUpdate.password,
      name: toUpdate.name,
    };
    const updatedUser = await UserModel.modify({ userId, newValues });

    return updatedUser;
  };

  static findUser = async ({ email, password }) => {
    const discoveredUser = await UserModel.findByEmail({ email });
    const hashedPassword = hashPassword(password);
    const userId = String(discoveredUser._id);

    if (!discoveredUser) {
      const errorMessage = "해당 이메일로 가입한 내역이 없습니다.";
      return { errorMessage };
    } else if (discoveredUser.password === hashedPassword) {
      const accessToken = makeToken({ userId: userId });
      const refreshToken = makeRefreshToken();

      const setRefreshToken = await TokenModel.updateRefresh({
        _id: userId,
        refreshToken,
      });

      return {
        discoveredUser,
        accessToken,
        refreshToken,
      };
    } else {
      const errorMessage = "비밀번호가 틀립니다 다시 한 번 확인해 주세요";
      return { errorMessage };
    }
  };

  static userCount = async ({ userId }) => {

    const boardCount = await BoardModel.boardCount({ userId });
    if (boardCount == null) {
      const errorMessage = "유저를 다시 확인해주세요. - board";
      return { errorMessage };
    }

    const commentCount = await CommentModel.commentCount({ userId });
    if (boardCount == null) {
      const errorMessage = "유저를 다시 확인해주세요. - comment";
      return { errorMessage };
    }

    const likeCount = await LikeModel.likeCount({ userId });
    if (boardCount == null) {
      const errorMessage = "유저를 다시 확인해주세요. - like";
      return { errorMessage };
    }

    const result = {
      boardCount,
      commentCount,
      likeCount
    }

    return result
  }

  static async getUserInfo({ userId }) {
    const user = await UserModel.findByUserId({ userId });
    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage =
        "해당 유저는 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return user;
  }
}

export { userService };
