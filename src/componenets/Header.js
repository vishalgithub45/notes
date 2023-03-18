import React from 'react'

function Header() {
  return (
    <div className='header'>
        <h1>Dev Session Notes App</h1>
        <label class="switch"> 
            <input type="checkbox"/>
            <span class="slider"></span>
        </label>
    </div>
  )
}

export default Header 