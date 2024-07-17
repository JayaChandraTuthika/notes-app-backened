import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    labels: { type: Array, required: true },
  },
  { timestamps: true, versionKey: false }
);

const NoteModel = mongoose.model("notes_master", NoteSchema);

export default NoteModel;
