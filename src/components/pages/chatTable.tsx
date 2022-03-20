import React from 'react'

import photo1 from '../../images/chattable.png';

const chatTable: React.FC = () => {
  return(
    <div className="App">



      <div className='contents-list'>
        <div className='main-contents contents trim'>
          <h1 className="main-title">chatTable</h1>
          {/* <div className='content'> */}
            <img src={photo1} alt="chatTable画像" />
          {/* </div> */}
        </div>

        <h1 className="title">概要</h1>
        <div className='contents'>
          <div className='content'>
            
          </div>
        </div>
        
      </div>


        
      
      <div className="skills-list">



        
          <h1 className="title">chatTable</h1>
          <h1 className="title">きっかけ</h1>
          <h1 className="title">内容</h1>
          <h1 className="title">振り返り</h1>
          
      </div>
    </div>
  )
}


export default chatTable;