import { Token } from "../schemas/token";

class TokenModel {
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
