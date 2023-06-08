import React from 'react'

import photo1 from '../../images/pm2022.jpg';

const PM2022: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>October,2022</p>
            <h1>お祭り-人魂アート-</h1>
          </div>
          <img src={photo1} alt="photo"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
          <p className='content'>
            津田塾祭での展示
          </p>
        </div>

        <h1 className="title">システム概要</h1>
        <div className='contents'>
          <p className='content'>
            
          </p>
        </div>
        <div className="movie">
          <iframe
            src={`https://www.youtube.com/embed/X-uI_nuu9TU`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

        <h1 className="title">ツール</h1>
        <div className='contents'>
          <div className='content'>
            TouchDesigner，Kinect v2
          </div>
        </div>


        <h1 className="title">取り組み</h1>
        <div className='contents'>
          <p className='content'>
            ユーザの骨格検出，3次元骨格位置推定
          </p>
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>
            たくさんの人に楽しんでもらえた．
            <br />
            子供の身長だとセンシングから外れてしまった．
            <br />
            プロトタイプ作成の時は，色々な人に体験してもらうことが大切．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default PM2022;