import React, { useState } from 'react'
import {FaTrashAlt} from "react-icons/fa";
import './Note.css'

const Note = (props) => {

    const {text, id, category, date, handleOnDelete, handleFileNote, isFiled} = props
    const [newText, setNewText] = useState("")

    const handleChangeText = (e) => {
        if (e.target.value.length >= 0) {
            setNewText(newText)
        }
    }
    return (
        <div key={id} className={`background-${category} note`}  >
            <textarea 
            cols="10"
            rows="8"
            onChange={handleChangeText}
            defaultValue={text}
            >
            </textarea>
            <div className='note-footer'>
                <span>{date}</span>
                <p>Categoría: {category} </p>
                <FaTrashAlt className='delete-note' onClick={()=> handleOnDelete(id)}/>
                {isFiled(id)
                ?
                <button className="archived-note" onClick={()=>{handleFileNote(id)}}>Desarchivar</button>
                :
                <button className="archived-note" onClick={()=>{handleFileNote(id)}}>Archivar</button>
                }
            </div>
        </div>
    )
}

export default Note