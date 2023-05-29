import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Dummydata from "./interface/Dummydata";
import Note from "./components/Note/Note";

function App() {
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setNotesList(response.data.notes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function updateNotesList(updatedNote) {
    const updatedList = notesList.map((note) => {
      if (note.id === updatedNote.id) {
        return { ...note, text: updatedNote.text };
      }
      return note;
    });
    console.log(updatedList);
    setNotesList(updatedList);
  }

  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((note, index) => {
          return (
            <Note note={note} onNoteUpdate={updateNotesList} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
