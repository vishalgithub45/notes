import React from 'react'
import Note from './Note'
import AddNote from './AddNotes' 
export default function NoteList({notes,addNote,noteText,handleNoteText,handleDeleteNote}) {
    // console.log(notes)
  return (
    <div className='notes-container'>
        <AddNote noteText={noteText} handleNoteText={handleNoteText} addNote={addNote} />
    {notes.map(note => <Note handleDeleteNote={handleDeleteNote} key={note.id} note= {note}/>)}
    </div> 
  )  
}

 