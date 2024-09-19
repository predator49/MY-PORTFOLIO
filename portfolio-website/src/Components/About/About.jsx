// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/mycric.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m Om Yadav, a final-year B.Tech student in Computer Science (Full Stack and DevOps) at DIT University, Dehradun, with a CGPA of 8.93. Alongside my academic pursuits, I have gained valuable experience as a Front End Web Developer Intern at Oasis Infobyte and Bharat Intern. I’ve worked on significant projects like Literary Lane, a MERN stack book-selling platform, and a Java-based chat application. My technical skills span Java, JavaScript, React.js, and Node.js, and I’ve been recognized as a 5-star Problem Solving Expert on HackerRank.</p>
                <p>Beyond academics, I am deeply involved in campus life. I serve as the Overall Coordinator of the Fitness Club and was the Head of Management for the Google Developer Students Club at my university. Additionally, I am the captain of the university cricket team and have proudly represented my state in cricket. I’m passionate about blending technology with creativity and am always excited about new challenges and opportunities for collaboration.</p>
            </div>
            <div className="about-skills">
            <div className="about-skill"><p>Java</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>SQL</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>Node.js</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        
      
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2</h1>
            <p>INTERNSHIPS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
