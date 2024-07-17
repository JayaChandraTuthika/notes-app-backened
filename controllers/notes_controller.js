import mongoose from "mongoose";
import NoteModel from "../mongodb/models/note.js";

let ObjectId = mongoose.Types.ObjectId;

export const saveNewNote = async (req, res) => {
  try {
    const {
      title = "test",
      description = "test",
      tags = [],
      labels = [],
    } = req.body;
    let newNote = new NoteModel({
      title: title,
      description: description,
      labels: labels,
    });
    let savedNote = await newNote.save();
    console.log(savedNote);
    res.send("Saved Notes!!");
  } catch (err) {
    console.log(err);
  }
};

export const searchNote = async (req, res) => {
  try {
    console.log(req.query);
    let searchQuery = req.query.search || "";

    let notesList = await NoteModel.find({ title: { $regex: searchQuery } });
    console.log(notesList);
    res.send(notesList);
    // res.send("Search done!");
  } catch (err) {
    console.log(err);
  }
};
