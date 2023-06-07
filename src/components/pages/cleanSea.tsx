import React from 'react'

import photo1 from '../../images/sea.jpg';

const cleanSea: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>September,2020</p>
            <h1>clean sea</h1>
          </div>
          <img src={photo1} alt="photo"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
          <p className='content'>

          </p>
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

        <h1 className="title">取り組み</h1>
        <div className='contents'>
          <p className='content'>
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


export default cleanSea;