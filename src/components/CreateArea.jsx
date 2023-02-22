import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleInput(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      scontent: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
