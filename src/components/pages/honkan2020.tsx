import React from 'react'

import photo1 from '../../images/honkan2020.jpg';

const honkan2020: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>Febrary,2020</p>
            <h1>本館投影-バレンタイン-</h1>
          </div>
          <img src={photo1} alt="photo"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
          <div className='content'>
            建物に投影したくなったから．
          </div>
        </div>

        <h1 className="title">概要</h1>
        <div className='contents'>
          <div className='content'>
            投影時期がバレンタインと近いということで，バレンタインをテーマに作成した．
            <br />
            初めて3Dアニメーションに取り組み，クッキーくんをくるくる回すところに力を入れた．
          </div>
        </div>
        <div className="movie">
          <iframe
            src={`https://www.youtube.com/embed/WnFrCt5Skx0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

        <h1 className="title">ツール</h1>
        <div className='contents'>
          <div className='content'>
            Blender，Motion5
          </div>
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>
            プロジェクタの位置がズレてしまい，建物に合わせて投影することができなかった．
            <br />
            奥行きが出る表現ができるようになりたい．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default honkan2020;