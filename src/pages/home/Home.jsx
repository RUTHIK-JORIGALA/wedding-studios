import React from 'react'
import Contact from '../../components/contact/Contact'

import './home.css'
import Slider from '../../components/slider/Slider'
import image1 from '../../assets/marriage/marriage-01.jpg'
import image2 from '../../assets/fashion/fashion-04.jpg'
import image3 from '../../assets/kids/kid4.jpg'
import image4 from '../../assets/fashion/fashion-08.jpg'
import image5 from '../../assets/fashion/fashion-01.jpg'


const Home = () => {
  return (
    <div>
      <Slider />
      <div className="intro-text">

        <h2>
        WE LOVE TO TELL YOUR UNIQUE STORY THROUGH AN EXQUISITE COLLECTION OF STUNNING PHOTOS & VIDEOS!</h2>

        <p>Our team of professional photographers and videographers artfully capture the explosion of emotions, expressions and delicate moments. You will find yourself returning to the photos & videos and reliving the romance and raw emotions of your wedding day.</p>
      </div>
      <div className="services-container">
        <div className='service-image'>
          <img src={image1} alt="" />
        </div>
        <div className='service-text'>
          <h2>WEDDINGS</h2>
          <p>A wedding is the happiness of the people committing their lives to each other. The spirit of your wedding day is not captured in scripted or staged photos. It’s those moments of fun, laughter, emotion, and beauty that might not even be noticed. We capture your precious moments with love and promise our heart.</p>
        </div>
        
      </div>
      <div className="services-container">
        
        <div className='service-text'>
          <h2>PORTRAITS</h2>
          <p>A couple portrait lets you celebrate your magnificent relationship. No matter in what stage your relationship is, it deserves to be captured. We aim to capture your love for each other and your unique style, to create everlasting memories.</p>
        </div>
        <div className='service-image'>
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="services-container">
        <div className='service-image'>
          <img src={image3} alt="" />
        </div>
        <div className='service-text'>
          <h2>WEDDINGS</h2>
          <p>A wedding is the happiness of the people committing their lives to each other. The spirit of your wedding day is not captured in scripted or staged photos. It’s those moments of fun, laughter, emotion, and beauty that might not even be noticed. We capture your precious moments with love and promise our heart.</p>
        </div>
      </div>
      <div className="services-container">
        
        <div className='service-text'>
          <h2>WEDDINGS</h2>
          <p>A wedding is the happiness of the people committing their lives to each other. The spirit of your wedding day is not captured in scripted or staged photos. It’s those moments of fun, laughter, emotion, and beauty that might not even be noticed. We capture your precious moments with love and promise our heart.</p>
        </div>
        <div className='service-image'>
          <img src={image4} alt="" />
        </div>
      </div>
      <div className="services-container">
        <div className='service-image'>
          <img src={image5} alt="" />
        </div>
        <div className='service-text'>
          <h2>WEDDINGS</h2>
          <p>A wedding is the happiness of the people committing their lives to each other. The spirit of your wedding day is not captured in scripted or staged photos. It’s those moments of fun, laughter, emotion, and beauty that might not even be noticed. We capture your precious moments with love and promise our heart.</p>
        </div>
      </div>

    <Contact />      
      
    </div>
  )
}

export default Home
