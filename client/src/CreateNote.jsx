import React, {useState} from "react";
import axios from "axios";


function CreateNote() {
    const [fullNote, setFullNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setFullNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const apiPost = async () => {
        await axios
            .post(`http://localhost:8080/import`, {
                title: fullNote.title,
                content: fullNote.content
            })
            .then((response) => {
                console.log(response)
            })
    }

    return (
        <div className="form">
            <label htmlFor="title" style={{fontSize: "25px"}}>Title:</label>
            <input onChange={handleChange} value={fullNote.title} name="title" type="text" id="title" />
            <label htmlFor="content" style={{fontSize: "25px"}}>Content:</label>
            <textarea onChange={handleChange} value={fullNote.content} name="content" id="content" cols="30" rows="10" />
            <button className="button" onClick={apiPost}>Add Note</button>
        </div>
    )
}

export default CreateNote;