// eslint-disable-next-line no-unused-vars
import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="image-wrapper" key={index}>
            <img src={work.w_img} alt={`work-${index}`} />
            <p className="description">{work.description}</p>
            <a
              href={work.githubLink}
              className="github-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default MyWork;
