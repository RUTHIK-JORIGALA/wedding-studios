import React from 'react'
import './photos.css'
import { Link } from 'react-router-dom'
import Contact from '../../components/contact/Contact'

const Photos = () => {
  return (
    <section>
        <div className="photo-category-container">
            <div className="photo-category wedding">
                <h1>Weddings</h1>
                <Link className='photo-view-link'>View</Link>
            </div>
            <div className="photo-category portraits">
                <h1>Portraits</h1>
                <Link className='photo-view-link'>View</Link>
            </div>
            <div className="photo-category kids">
                <h1>Kids</h1>
                <Link className='photo-view-link'>View</Link>
            </div>
            <div className="photo-category fashion">
                <h1>Fashion</h1>
                <Link className='photo-view-link'>View</Link>
            </div>
        </div>
        <Contact />
    </section>
  )
}

export default Photos
