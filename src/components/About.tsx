import React from 'react';

import myPhoto from '../images/myPhoto.jpg';


const About: React.FC = () => {
    return(
      <div className="App">
        <div className="myProfile-list">
          <h1 className="title">Profile</h1>
          <div className="myProfile">
            <img src={myPhoto} alt="myPhoto"></img>
            <div className="mySentences">
              <h2>Yurika</h2>
              <p>自己紹介</p>
            </div>
          </div>
        </div>
        <div className="skills-list">
          <h1 className="title">Skills</h1>
          <ul>
            <li>Java</li>
            <span className="star5_rating" data-rate="4"></span>
            <li>Python</li>
            <span className="star5_rating" data-rate="3.5"></span>
            <li>HTML/CSS</li>
            <span className="star5_rating" data-rate="4"></span>
            <li>jQuery</li>
            <span className="star5_rating" data-rate="4"></span>
            <li>React.js</li>
            <span className="star5_rating" data-rate="3"></span>
            <li>Blender</li>
            <span className="star5_rating" data-rate="4"></span>
            <li>Motion(動画編集)</li>
            <span className="star5_rating" data-rate="3.5"></span>
          </ul>
        </div>
        
      </div>
    )
}


export default About;