import React, { useState } from 'react'
import './NewNote.css'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import NativeSelect from '@mui/material/NativeSelect'

const NewNote = (props) => {
    const { handleAddNote } = props
    const [newNote, setNewNote] = useState("")
    const [category, setCategory] = useState("Hogar")
    const characterLimit = 144;

    const handleOnChangeText = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNewNote(e.target.value)
        }
    }
    const handleOnChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleOnClick = () => {
        if (newNote.trim().length > 0) {
            handleAddNote(newNote, category.toLowerCase())
            setNewNote("")
        }
    }


    return (
        <div className="note">
            <textarea
                cols="10"
                rows="8"
                placeholder='Nueva nota..'
                onChange={handleOnChangeText}
                value={newNote}
            ></textarea>
            <div className='newnote-footer'>
                <div>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Categoría
                        </InputLabel>
                        <NativeSelect
                            value={category}
                            onChange={handleOnChangeCategory}
                        >
                            <option value="hogar">Hogar</option>
                            <option value="trabajo">Trabajo</option>
                            <option value="compras">Compras</option>
                            <option value="ocio">Ocio</option>
                            <option value="tramites">Trámites</option>
                            <option value="recordatorio">Recordatorio</option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className='save-note'>
                    <span>{characterLimit - newNote.length} Caracteres Restantes</span>
                    <div className='button-save-note'>
                    <button onClick={handleOnClick}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNote