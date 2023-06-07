import React from 'react'

import photo1 from '../../images/chattable2.png';

const chatTable: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>2020~2021年（学部2,3年）</p>
            <h1>chatTable</h1>
          </div>
          <img src={photo1} alt="chatTable画像" />
        </div>

        <h1 className="title">取り組むきっかけ</h1>
        <div className='contents'>
          <div className='content'>
            
          </div>
        </div>

        <h1 className="title">内容</h1>
        <div className='contents'>
          {/* <img src={photo2} alt="提案システム概要" /> */}
          <p className='content'>
            あああ
          </p>
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


export default chatTable;