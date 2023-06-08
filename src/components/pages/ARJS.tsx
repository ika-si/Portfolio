import React from 'react'

import photo1 from '../../images/pochama.png';

const ARJS: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>August,2022</p>
            <h1>ARポッチャマ</h1>
          </div>
          <img src={photo1} alt="photo"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
          <div className='content'>
            教育実習のお礼の手紙に添えるため．
          </div>
        </div>

        <h1 className="title">システム概要</h1>
        <div className='contents'>
          <div className='content'>
            QRコードマーカにスマホをかざすとポッチャマが出現
          </div>
        </div>

        <h1 className="title">ツール</h1>
        <div className='contents'>
          <div className='content'>
            Blender，AR.js
          </div>
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>
            意外と綺麗に表示できることがわかった．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default ARJS;