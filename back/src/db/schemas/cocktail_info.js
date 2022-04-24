import { Schema, model } from "mongoose";

const CocktailInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredient: {
    type: [String],
  },
  imageUrl: {
    type: String,
  },
  flavor: {
    type: [String],
  },
  description: {
    type: String,
  },
  alcohol: {
    type: String,
  },
});

const CocktailInfo = model("CocktailInfo", CocktailInfoSchema);

export { CocktailInfo };
