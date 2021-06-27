import React from 'react';

import myPhoto from '../images/myPhoto.jpg';


const About: React.FC = () => {
    return(
      <div className="App">
        <div className="myProfile">
          <img src={myPhoto} alt="myPhoto"></img>
          <div className="mySentences">
            <h2>Yurika</h2>
            <p>自己紹介</p>
          </div>
        </div>
        <div className="skills-list">
          <h1>Skills</h1>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>HTML/CSS</li>
            <li>jQuery</li>
            <li>ReactJS</li>
            <li>Blender</li>
            <li>Motion(動画編集)</li>
          </ul>
        </div>
      </div>
    )
}


export default About;