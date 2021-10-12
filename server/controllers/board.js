import boardData from "../models/board.js";

export const getBoards = async (req, res) => {
  try {
    const allBoards = await boardData.find();
    res.status(200).json(allBoards);
  } catch (error) {
    res.statu(404).json({ message: error.message });
  }
};

export const createBoard = async (req, res) => {
  const board = req.body;

  const newBoard = new boardData(board);

  try {
    await newBoard.save();
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBoard = async (req, res) => {
  const id = req.params.id;

  try {
    await boardData.findByIdAndRemove(id).exec();
    res.send("successfully Deleted!");
  } catch (error) {
    console.log(error);
  }
};
