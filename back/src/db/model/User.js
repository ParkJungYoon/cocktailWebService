import { User } from "../Schema/user";

class UserModel {
  static findByEmail = async email => {
    const user = User.findOne({ email });
    return user;
  };
  static addUser = async newUserData => {
    const newUser = await User.create(newUserData);
    return newUser;
  };
}

export { UserModel };
