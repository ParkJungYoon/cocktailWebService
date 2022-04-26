import { Token } from "../schemas/token";

class TokenModel {
  static async findToken(userId) {
    const userToken = await Token.findOne({ _id: userId });
    return userToken;
  }

  static updateRefresh = async ({ _id, refreshToken }) => {
    const update = await Token.updateOne(
      { _id },
      { _id, refreshToken },
      { upsert: true }
    );
    return update;
  };
}

export { TokenModel };
