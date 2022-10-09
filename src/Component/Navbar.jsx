import React from 'react'
import './Nabar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_logo'>
            <div className='navbar_logo_1'></div>
            <div className='navbar_logo_2'></div>
            <div className='navbar_logo_3'></div>
            <div className='navbar_logo_4'></div>
            <div className='navbar_logo_5'></div>
            <div className='navbar_logo_6'></div>
            <div className='navbar_logo_7'></div>
            <div className='navbar_logo_8'></div>
            <div className='navbar_logo_9'></div>
            <div className='navbar_logo_10'></div>
            <div className='navbar_logo_11'></div>
            <div className='navbar_logo_12'></div>
            <div className='navbar_logo_13'></div>
            <div className='navbar_logo_14'></div>
            <div className='navbar_logo_15'></div>
            <div className='navbar_logo_16'></div>
            <div></div>
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
