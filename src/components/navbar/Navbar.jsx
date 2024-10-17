import React from 'react'
import { Link } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";

import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1><span>Sai </span>Wedding Films</h1>
      </div>
      <ul className='navLinks'>
        <li>
            <Link to="/" className='link'>Home</Link>
        </li>
        <li>
            <Link to="/photos" className='link'>Photos</Link>
        </li>
        <li>
            <Link to="/wedding" className='link'>Wedding Films</Link>
        </li>
        <li>
            <Link to="/about" className='link'>About Us</Link>
        </li>
        <li>
            <Link to="#" className='link'>Get Quote</Link>
        </li>
      </ul>
      <div className="contact">
        <IoCallOutline />
        <p>+91 9876543210</p>
        
      </div>
    </nav>
  )
}

export default Navbar
