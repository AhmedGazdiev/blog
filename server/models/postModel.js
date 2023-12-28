import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "user" },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    require: true,
  },
  likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  images: {
    type: Array,
    default: [],
  },
  category: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("post", postSchema);