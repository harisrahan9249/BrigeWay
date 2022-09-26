import React from 'react'
import './Nabar.css';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_logo'>
            <img src="./Images/logo.jpeg" alt="logo" />
        </div>
        <div className='navbar_tag'>
            <ul>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Team</a>
                <a href="#">Contact</a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
