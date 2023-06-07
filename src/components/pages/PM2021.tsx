import React from 'react'

import photo1 from '../../images/pm2021.png';

const PM2021: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
            <div className='main-contents'>
              <div className="main-title">
                <p className='date'>October,2021</p>
                <h1>cat world</h1>
              </div>
              <img src={photo1} alt="photo"/>
            </div>
    
            <h1 className="title">きっかけ</h1>
            <div className='contents'>
              <div className='content'>
                卒論
              </div>
            </div>
    
            <h1 className="title">システム概要</h1>
            <div className='contents'>
              {/* <img src={photo2} alt="提案システム概要" /> */}
              <p className='content'>

              </p>
            </div>

            <h1 className="title">ツール</h1>
            <div className='contents'>
              <div className='content'>
              </div>
            </div>

            <h1 className="title">振り返り</h1>
            <div className='contents'>
              <div className='content'>
    
              </div>
            </div>
            
          </div>
        
    </div>
  )
}


export default PM2021;