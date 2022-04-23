import { Schema, model } from "mongoose";

const RankSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  visitors: {
    type: Number,
  },
  years: {
    type: Object,
  },
  rank: {
    type: Number,
  },
});

const Rank = model("Rank", RankSchema);

export { Rank };
