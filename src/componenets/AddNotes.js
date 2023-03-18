import React from 'react'

export default  function AddNotes({addNote,noteText,handleNoteText}) {
  return (
    <div className='note new-note'>
        <textarea value={noteText} onChange={(e)=>handleNoteText(e.target.value)}  cols="30" rows="10" maxLength={250} placeholder="Type someting here....."></textarea>

        <div className='note-footer'>
            <small className='remaining'>remaining: {250 - noteText.length}</small>
            <button className='add-btn' onClick={addNote}>Add</button>

        </div>
    </div>
  )
} 

