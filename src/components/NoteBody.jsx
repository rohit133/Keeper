import React from "react";

// Returning the props to Notes to render it dynamicaly.
function NoteBody(props){
    return(
        <div className="note">
            {/* Returning the props such as title and content */}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}
export default NoteBody;
