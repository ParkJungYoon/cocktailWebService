import { User } from "../Schema/user";

class UserModel {
  static addUser = async newUserData => {
    const newUser = await User.create(newUserData);
    return newUser;
  };
}

export { UserModel };
