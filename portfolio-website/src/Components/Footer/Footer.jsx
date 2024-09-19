// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo1.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I am a final-year BTech CSE student specializing in Full Stack and DevOps, with skills in Java, React, JavaScript, and Node.js.</p>
        </div>
        <div className="footer-top-right">
            
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Om Yadav. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
