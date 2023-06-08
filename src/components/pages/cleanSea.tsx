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
          <div className='content'>
            授業
          </div>
        </div>

        <h1 className="title">概要</h1>
        <div className='contents'>
          <div className='content'>
            海洋ごみを除くゲーム
            <br />
            クリックするとゴミを取り除くことができる．
            <br />
            時間が経てば経つほど，深海に近づくことができる．
            <br />
            深度によって，出現する生き物が異なる．
          </div>
        </div>

        <h1 className="title">ツール</h1>
        <div className='contents'>
          <div className='content'>
            Processing
          </div>
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>
            初めてコードでグラフィックしてみて，細かい表現が可能になるのがとても好きだと感じた．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default cleanSea;