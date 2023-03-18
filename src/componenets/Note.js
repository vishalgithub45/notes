import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs';
export default function Note({note,handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{note.text}</span>

        <div className='note-footer'>
            <small className='data'>{note.date }</small>
            <button className='delete-btn' onClick={()=>handleDeleteNote(note.id)}><BsFillTrashFill/></button>
        </div>
    </div>  
  )
}
 