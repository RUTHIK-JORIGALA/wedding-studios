import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      
        <ul className='social-icons'>
            <li>
                <Link ><img className='social-img' src={facebook} alt="facebook" /></Link>
            </li>
            <li>
                <Link><img className='social-img' src={instagram} alt="instagram" /></Link>
            </li>
            <li>
                <Link><img className='social-img' src={youtube} alt="youtube" /></Link>
            </li>
        </ul>
      
      <p>© 2022 SAI WEDDING FILMS</p>
      <div>
        HYDERABAD | VIJAYAWADA | GUNTUR
      </div>
    </footer>
  )
}

export default Footer
