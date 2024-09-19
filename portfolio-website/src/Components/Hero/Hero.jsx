// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/myimg2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Om-Yadav_Software_Engineer.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" className='profile-img' />
      <h1><span>I'm Om Yadav,</span> Final year BTech CSE student specializing in Full Stack and DevOps</h1>
      <p>I am skilled in Java, React, JavaScript, and Node.js, and I'm passionate about building efficient and scalable web applications.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
