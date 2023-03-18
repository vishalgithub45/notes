import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";
import NoteList from "./componenets/NoteList";
import Search from "./componenets/Search";
import Header from "./componenets/Header";

function App() {
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([
    {
      text: "rutu",
      data: "04/06/2002",
      id: nanoid(),
    },
    {
      text: "aniket", 
      data: "04/06/2002",
      id: nanoid(),
    },
    {
      text: "vishal",
      data: "04/06/2002",
      id: nanoid(),
    },
    {
      text: "ajay",
      data: "04/06/2002",
      id: nanoid(),
    },
    {
      text: "aku",
      data: "04/06/2002",
      id: nanoid(),
    },
  ]);
  function addNote() {
    // console.log(noteText);
    const date = new Date().toLocaleDateString();
    setNoteText("");

    const newNote = {
      text: noteText,
      date: date,
      id: nanoid(),
    };

    const updateNotes = [...notes, newNote];
    //  console.log(updateNotes);
    setNotes(updateNotes);
  }
  function handleNoteText(text) {
    setNoteText(text);
    // console.log(noteText);
  }
  //  function handleDeleteNote(id) {
  //   console.log(id);
  //  }

  function handleDeleteNote(id) {
    console.log(id);
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  }

  function handleSearchText(text) {
    setSearchText(text);
    console.log("search txt changed");
  }

  return (
    <>
      <Header/> 
      <Search searchText={searchText} handleSearchText={handleSearchText} />
      <NoteList
        handleDeleteNote={handleDeleteNote}
        addNote={addNote}
        handleNoteText={handleNoteText}
        noteText={noteText}
        notes={notes.filter(note => note.text.includes(searchText))}
      />
    </>
  );
}

export default App;
