import { Schema, model } from "mongoose";

const CocktailSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    text: true,
  },
  ingredient: {
    type: [String],
  },
  imageUrl: {
    type: String,
  },
  rank: {
    type: Schema.Types.ObjectId,
    ref: "Rank",
  },
  taste: {
    type: [String],
  },
  description: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  likes: {
    type: Number,
    index: true,
  },
  method: {
    type: [String],
  },
});

const Cocktail = model("Cocktail", CocktailSchema);

export { Cocktail };
