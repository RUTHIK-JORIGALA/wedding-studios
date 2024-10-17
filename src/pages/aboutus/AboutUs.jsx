import React from 'react'
import './aboutus.css'
import heroImg from '../../assets/Hero.webp'

const AboutUs = () => {
  return (
    <section className='hero-container'>
        <div>
            <img src={heroImg} alt="Hero" className='img' />
        </div>
        <div className='second-container'>
            <h1>RJ WEDDING FILMS</h1>
            <h1 >About Us</h1>
            <p>Photos and Videos last for a lifetime, taking you back to that memorable day. Like a fairytale story. We at RJ Wedding Films help you to narrate your story. Not through words. Through moments. Memories. Glimpses of pure emotion. We capture it all as your love story unfolds on your special day. Some moments are too special to put into words. That’s why we picture it.</p>
            <p>We understand and embrace the truth that every wedding is as unique as the two people getting married. Your photos reflect your personal journey and celebration. Our expertise in Candid and Portrait photography extends far beyond the camera. Think of our team of as your personal perfectionists, working closely with you and your family in capturing the moments that will WOW! Your hearts forever.</p>
            <p>Everything needs to be perfect for the event to be a memorable one. Be it a small function or a grand wedding, we make every moment unique and exclusive. Right from pre-wedding couple shoot, wedding photography and cinematic videography. People in Hyderabad, Vijayawada and Guntur may contact us before we are already booked for the day!</p>
        </div>
      
    </section>
  )
}

export default AboutUs
