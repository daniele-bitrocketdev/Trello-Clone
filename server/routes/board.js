import express from "express";
import { getBoards, createBoard, deleteBoard } from "../controllers/board.js";
const router = express.Router();

router.get("/", getBoards);
router.post("/", createBoard);
router.delete("/:id", deleteBoard);

export default router;
