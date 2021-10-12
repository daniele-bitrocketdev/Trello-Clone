import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import boardRoutes from "./routes/board.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/boards", boardRoutes);

const CONNECTION_URL =
  "mongodb+srv://admin:admin@cluster0.qbjgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Connection is estabilished and running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
