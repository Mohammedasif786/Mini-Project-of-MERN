import mongoose from "mongoose";
import { Schema } from "mongoose";

const KittenSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const KittenModel = mongoose.model("Kitten", KittenSchema);
export default KittenModel;
