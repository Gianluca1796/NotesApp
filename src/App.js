import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import './App.css';
import NoteListContainer from './components/NoteListContainer/NoteListContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Categories from './components/Categories/Categories';


function App() {
  /* States */
  const [searchNote, setSearchNote] = useState("")
  const [archivedNotes, setArchivedNotes] = useState([])
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      text: 'Bienvenido/a a tu app de notas!',
      date: '15/04/2021',
    },
  ])


  /* UseEffect LocalStorage*/
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes-app-data')
    )

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(
      'notes-app-data',
      JSON.stringify(notes)
    )
  }, [notes])

  useEffect(() => {
    const savedFilesNotes = JSON.parse(
      localStorage.getItem('filesNotes-app-data')
    )

    if (savedFilesNotes) {
      setArchivedNotes(savedFilesNotes)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(
      'filesNotes-app-data',
      JSON.stringify(archivedNotes)
    )
  }, [archivedNotes])

  /*Functions to Add, Delete and File Notes */
  const addNote = (text, category) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: text,
      category: category,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    const deletedNote = notes.filter((note) => note.id !== id)
    const deletedFileNote = archivedNotes.filter((note) => note.id !== id)
    setNotes(deletedNote)
    setArchivedNotes(deletedFileNote)
  }
  const isFiled = (id) => {
    return archivedNotes.some((note) => note.id === id)
  }
  const fileNotes = (id) => {
    if (isFiled(id)) {
      const archivedNote = archivedNotes.find((note) => note.id === id)
      const changeArchivedNote = archivedNotes.filter((note) => note.id !== id)
      const newNotes = [...notes, archivedNote]
      setNotes(newNotes)
      setArchivedNotes(changeArchivedNote)
    } else {
      const fileNote = notes.find((note) => note.id === id)
      const changeArchivedNote = notes.filter((note) => note.id !== id)
      const newArchivedNotes = [...archivedNotes, fileNote]
      setArchivedNotes(newArchivedNotes)
      setNotes(changeArchivedNote)
    }
  }

  return (
    <div className="App">
      <SearchBar handleSearchNote={setSearchNote} />
      <Categories />
      <NoteListContainer
        notes={notes.filter((note) => note.text.includes(searchNote) || note.category.includes(searchNote))}
        handleAddNote={addNote}
        handleOnDelete={deleteNote}
        handleFileNote={fileNotes}
        filesNotes={archivedNotes}
        isFiled={isFiled}
      />
    </div>
  );
}



export default App;
