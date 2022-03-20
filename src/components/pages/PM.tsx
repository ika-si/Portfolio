import React from 'react'
import YouTube from 'react-youtube';

import photo1 from '../../images/cat.png';

const PM: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents contents'>
          <h1 className="main-title">Projection Mapping</h1>
          {/* <div className='content'> */}
            <img src={photo1} alt="" />
          {/* </div> */}
        </div>

        <h1 className="title">概要</h1>
        <div className='contents'>
          <div className='content'>
            

            <div className="myMovie">
              <div className="rightMovie">
                <YouTube videoId="EqdZFGlNvB4"/>
              </div>
              <div className="leftMovie">
                <YouTube videoId="AZR9w-IBweA"/>
              </div>
              <div className="rightMovie">
                <YouTube videoId="AcUIZv7Qwgc"/>
              </div>
              <div className="leftMovie">
                <YouTube videoId="WnFrCt5Skx0"/>
              </div>
              <div className="rightMovie">
                <YouTube videoId="cLn1ARN6HS4"/>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}


export default PM;