import React from 'react'

import photo1 from '../../images/interaction2023_1.png';

const Pro4: React.FC = () => {
    return(
        <div className="App">
          <div className='contents-list'>
            <div className='main-contents'>
              <div className="main-title">
                <p className='date'>Mar,2023（学部4年）</p>
                <h1>ユーザの位置計測に基づいた自然なインタラクション遷移を実現するデジタルサイネージシステム</h1>
              </div>
              <img src={photo1} alt="本研究の特徴"/>
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
                4つのフェーズで構成される．
                <br />
                ①Ambient Display
                <br />
                ②Implicit Interaction
                <br />
                ③Subtle Interaction
                <br />
                ④Personal Interaction
              </p>
            </div>

            <h1 className="title">ツール</h1>
            <div className='contents'>
              <div className='content'>
                swift（coreMLを用いたモデル作成，顔認識など）
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


export default Pro4;