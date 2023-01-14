import React from 'react'
import '../css/hero.css'
import hero from '../images/hero-img.png'

function Hero() {
  return (
    <div className='container hero-container'>
        <div className='hero-img-container'>
            <img src={hero} alt="" className='hero-img'/>
        </div>
        <div className="hero-img-info">
            <h1 className='hero-title'>Online Experiences</h1>
            <p className='hero-info'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        
    </div>
  )
}

export default Hero