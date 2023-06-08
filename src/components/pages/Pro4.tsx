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
                <h3>情報処理学会 インタラクション2023 ポスター発表</h3>
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
              <div className='content'>
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

              </div>
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
                対面での学会発表で，聞いている人にわかりやすく説明する大切さを学んだ．
                自分の興味のある分野の研究について議論することが楽しかった．
              </div>
            </div>
            
          </div>
            
        </div>
    )
}


export default Pro4;