import React from 'react'

import photo1 from '../../images/pm2019.png';

const PM2019: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>October,2019</p>
            <h1>時代</h1>
          </div>
          <img src={photo1} alt="photo"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
          <p className='content'>
            津田塾祭での展示
          </p>
        </div>

        <h1 className="title">概要</h1>
        <div className='contents'>
          <p className='content'>
            時代をそれぞれ映像で表した．
            <br />
            担当箇所は戦国時代．
            <br />
            初めての動画編集，プロジェクションマッピングで，素材の作成技術がなかったため，アニメーションを効果的に使うことを意識した．
          </p>
        </div>
        <div className="movie">
          <iframe
            src={`https://www.youtube.com/embed/cLn1ARN6HS4?start=106`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

        <h1 className="title">ツール</h1>
        <div className='contents'>
          <div className='content'>
            Motion5
          </div>
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>
            障子の一枚一枚にキーフレームを打つより，ライブラリを使うと効率がいいことを学んだ．
            <br />
            影を使うと没入感を出せる．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default PM2019;