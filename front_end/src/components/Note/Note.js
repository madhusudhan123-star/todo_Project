import "./note.css";
import { FocusEvent } from "react";

function Note({ note, onNoteUpdate }) {
  const onTextInputBlur = (event) => {
    const newText = event.currentTarget.textContent;
    const updatedNote = { ...note, text: newText };
    onNoteUpdate(updatedNote);
  };

  return (
    <div className="note">
      <div
        onBlur={onTextInputBlur}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="note__text"
      >
        {note.text}
        <br />
        {note.id}
      </div>
      <h5 className="note__link">
        <a href={note.link}>{note.link}</a>
      </h5>
    </div>
  );
}

export default Note;
