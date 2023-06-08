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
              津田塾祭での展示
              </div>
            </div>
    
            <h1 className="title">システム概要</h1>
            <div className='contents'>
              {/* <img src={photo2} alt="提案システム概要" /> */}
              <div className='content'>
              人物検出を行い，人が入場したタイミングで3DCGアニメーションが再生される．
              天井から猫が覗き込んでいることを表現した．
              </div>
            </div>
            <div className="movie">
          <iframe
            src={`https://www.youtube.com/embed/EqdZFGlNvB4`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

            <h1 className="title">ツール</h1>
            <div className='contents'>
              <div className='content'>
                Blender，Python，RealSense
              </div>
            </div>

            <h1 className="title">振り返り</h1>
            <div className='contents'>
              <div className='content'>
                オンラインでの塾祭ではあったものの，みんなと協力して初めてインタラクティブなプロジェクションマッピングを作れて楽しかった．
              </div>
            </div>
            
          </div>
        
    </div>
  )
}


export default PM2021;