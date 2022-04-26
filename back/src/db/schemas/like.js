import { model, Schema } from "mongoose";

const likeSchema = new Schema({
  giveUserId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  getCocktailId: {
    type: Schema.Types.ObjectId,
    ref: "Cocktail",
  },
  name: {
    type: String,
    required: true,
  },
});

const Like = model("Like", likeSchema);

export { Like };
