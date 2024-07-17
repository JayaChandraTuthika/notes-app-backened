import express from "express";

import * as dotenv from "dotenv";
import { saveNewNote, searchNote } from "../controllers/notes_controller.js";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello From Notes!");
});

router.route("/filter").get(searchNote);

router.route("/save-note").get(saveNewNote);

export default router;
