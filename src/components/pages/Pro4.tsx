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
                デジタルサイネージにユーザを惹きつけるためのシステムを構築し，評価，検討を行なった．
                <br />
                4つのフェーズで構成される．
                <br />
                ①Ambient Display
                <br />
                全体を提示
                <br />
                ②Implicit Interaction
                <br />
                運動視差を用いて3Dオブジェクトを立体的に見ることが可能
                <br />
                ③Subtle Interaction
                <br />
                ハンドジェスチャを用いてアニメーション切り替え，3Dオブジェクトの回転が可能
                <br />
                ④Personal Interaction
                <br />
                bluetoothを用いた情報共有

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