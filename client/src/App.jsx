import React, {useState} from "react";
import Note from "./Note"
import CreateNote from "./CreateNote";
import axios from "axios"
import Header from "./Header"
import Footer from "./Footer"

function App() {
    const [notes, setNotes] = useState([])

    const apiGet = async () => {
        await axios
            .get(`http://localhost:8080/export`)
            .then((response) => {
                setNotes(response.data)
            })
    }

    const apiDelete = async (id) => {
        await axios
            .post(`http://localhost:8080/delete`, {
                id: id
            })
    }

    apiGet()

    return (
        <div>
            <Header/>
            <CreateNote />
            <div className="notes-parent">
                {notes.map((item, index) => {return <Note id={item.id} key={index} title={item.title} content={item.content} onDelete={apiDelete} />})}
            </div>
            <Footer />
            
        </div>
    )
}

export default App;