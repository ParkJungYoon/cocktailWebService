import { Schema, model } from "mongoose";

const ImageSchema = new Schema({
  fileName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
});

const Image = model("Image", ImageSchema);

export { Image };
