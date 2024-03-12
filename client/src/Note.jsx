import React from "react";


function Note(props) {
    return (
        <div className="note-child">
            <h1>{props.title}</h1>
            <h2>{props.content}</h2>
            <button className="button" onClick={() => {props.onDelete(props.id)}}>Delete me</button>
        </div>
    )
}

export default Note;