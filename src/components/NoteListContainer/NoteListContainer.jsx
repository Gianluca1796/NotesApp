import React, { useState } from 'react'
import NewNote from '../NewNote/NewNote'
import Note from '../Note/Note'
import './NoteListContainer.css'

const NoteListContainer = (props) => {
    /*State to display archived notes */
    const [changeScreen, setChangeScreen] = useState(false)

    const showArchivedNotes = () => {
        setChangeScreen(!changeScreen)
    }

    const { notes, filesNotes, handleAddNote, handleOnDelete, handleFileNote, isFiled } = props
    return (
        <>
            {
                changeScreen ?
                    <>
                        <div className='show-archived-notes' >
                            <button className='archived-note' onClick={showArchivedNotes}>Activas</button>
                        </div>
                        <div className='title-screen'>
                            <h3>Archivadas</h3>
                        </div>
                        <div className='note-list-container'>
                            {filesNotes.map((note) =>
                                <Note key={note.id} id={note.id} text={note.text} date={note.date} category={note.category} handleOnDelete={handleOnDelete} handleFileNote={handleFileNote} isFiled={isFiled} />
                            )}
                        </div>
                    </>
                    :
                    <>
                        <div className='show-archived-notes' >
                            <button className='archived-note' onClick={showArchivedNotes}>Archivadas</button>
                        </div>
                        <div className='title-screen'>
                            <h3>Activas</h3>
                        </div>
                        <div className='note-list-container'>
                            <NewNote handleAddNote={handleAddNote} />
                            {notes.map((note) =>
                                <Note key={note.id} id={note.id} text={note.text} date={note.date} category={note.category} handleOnDelete={handleOnDelete} handleFileNote={handleFileNote} isFiled={isFiled} />
                            )}
                        </div>
                    </>
            }
        </>
    )

}

export default NoteListContainer