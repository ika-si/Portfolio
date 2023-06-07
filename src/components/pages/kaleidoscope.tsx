import React from 'react'

import photo1 from '../../images/kaleidoscope.jpg';

const kaleidoscope: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>2023</p>
            <h1>バーチャル万華鏡</h1>
          </div>
          <img src={photo1} alt="画像" />
        </div>

        <h1 className="title">内容</h1>
        <div className='contents'>
          {/* <img src={photo2} alt="提案システム概要" /> */}
          <p className='content'>
            {/* あああ */}
          </p>
        </div>

        <h1 className="title">ツール</h1>
        <div className='contents'>
          {/* <img src={photo2} alt="提案システム概要" /> */}
          <p className='content'>
            toio
          </p>
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          {/* <img src={photo2} alt="提案システム概要" /> */}
          <p className='content'>

          </p>
        </div>
        
      </div>
        
    </div>
  )
}


export default kaleidoscope;