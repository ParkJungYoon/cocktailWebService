import { Schema, model } from "mongoose";

const UserCocktailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredient: {
    type: [String],
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const UserCocktail = model("UserCocktail", UserCocktailSchema);

export { UserCocktail };
