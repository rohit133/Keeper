import React from "react";
import NoteBody from "./NoteBody";
import notes from "../notes";
// Create a Note.jsx component to show a <div> element with a
// <h1> for a title and a <p> for the content.

function Notes() {
  return (
    // Returing the note body with dynamic conetent 
    notes.map((noteItem) => <NoteBody
        key = {noteItem.key}
        title = {noteItem.title}
        content = {noteItem.content}
      />
    )
  );
}
export default Notes;
