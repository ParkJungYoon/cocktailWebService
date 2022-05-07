import { User } from "../schemas/user";

class UserModel {
  static addUser = async (newUserData) => {
    const newUser = await User.create(newUserData);
    return newUser;
  };

  static delete = async ({ userId }) => {
    const deleteUser = await User.findByIdAndDelete({ _id: userId });
    return deleteUser;
  };

  static modify = async ({ userId, newValues }) => {
    const filter = { _id: userId };
    const update = { $set: newValues };
    const option = { returnOriginal: false };
    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  };

  static findByEmail = async ({ email }) => {
    const user = User.findOne({ email });
    return user;
  };

  static findById = async ({ _id }) => {
    const user = await User.findOne({ _id });
    return user;
  };

  static findByUserId = async ({ userId }) => {
    const user = await User.findOne({ _id: userId });
    return user;
  };
}

export { UserModel };
