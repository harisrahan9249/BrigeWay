import React from 'react'
import './Nabar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
  
        <div className='logo'>
        
        </div>
        
        <div className='navbar_tag'>
            <ul>
            <Link className='Link' to='/'>Home</Link>
            <div className='border'></div>
            <Link className='Link' to='/about'>About</Link>
            <div className='border'></div>

            <Link className='Link' to='/services'>Services</Link>
            <div className='border'></div>

            <Link className='Link' to='/team'>Team</Link>
            <div className='border'></div>

            <Link className='Link' to='/contact'>Contact</Link>
               
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
