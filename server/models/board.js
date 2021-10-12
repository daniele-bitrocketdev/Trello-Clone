import mongoose from "mongoose";
const boardSchema = mongoose.Schema({
  id: String,
  title: String,
});

const board = mongoose.model("board", boardSchema);
export default board;
