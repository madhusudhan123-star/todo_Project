const express = require("express");
const notesrouter = express.Router();
const Note = require("../../db/models/note.model");
const noteModel = require("../../db/models/note.model");

notesrouter.get("/", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json({
      listofNotes: notes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

notesrouter.post("/", async (req, res) => {
  const { text, link } = req.body; // Extract the required fields from the request body
  try {
    const newNote = new Note({ text, link });
    const savedNote = await newNote.save();
    res.json({
      note: savedNote,
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

notesrouter.get("/:id", async (req, res) => {
  const noteid = req.params.id;
  try {
    const note = await Note.findById(noteid);
    res.json({
      reply: "note by id sucess",
      noteid,
    });
    if (!note) {
      return res.status(404).json({ error: "note not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

notesrouter.delete("/:id", async (req, res) => {
  const noteid = req.params.id;
  try {
    const note = await Note.findByIdAndDelete(noteid);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({
      reply: "Delete success",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

notesrouter.put("/:id", async (req, res) => {
  const noteid = req.params.id;
  const updateBody = req.body;
  try {
    const note = await Note.findByIdAndUpdate(noteid, updateBody, {
      new: true,
    });
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({
      reply: "updated success",
      note: note,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = {
  notesrouter,
};
