import { Schema, model } from "mongoose";

const CocktailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredient: {
    type: Object,
  },
  rank: {
    type: Schema.Types.ObjectId,
    ref: "Rank",
  },
});

const Cocktail = model("Cocktail", CocktailSchema);

export { Cocktail };
