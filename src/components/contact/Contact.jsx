import React from 'react'
import { Link } from 'react-router-dom';
import './contact.css'
import { MdMailOutline } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";

const Contact = () => {
  return (
    <div className='get-in-touch'>
        <div className='get-in-touch-text'>
          <h1>Get in touch</h1>
          <p>We'd love to hear from you</p>
        </div>

        <div className="contact-options">
          <div className="contact-option option1">
            <Link className='option1-link'>
              <MdMailOutline className='option-icon' />
              <p className='option-text'>sample@gmail.com</p>
            </Link>
          </div>

          <div className="contact-option option2">
            <Link>
              <SlCallOut className='option-icon' />
              <p className='option-text'>+91 9876543210</p>
             
            </Link>
          </div>

          <div className="contact-option option3">
            <Link>
              <FaFacebookF className='option-icon' />
              <p className='option-text'>Find us on Facebook</p>
            </Link>
          </div>

          <div className="contact-option option4">
            <Link>
              <CgNotes className='option-icon' />
              <p className='option-text4'>Get Quote</p>
            </Link>
          </div>

        </div>
        
        
      </div>
  )
}


export default Contact
