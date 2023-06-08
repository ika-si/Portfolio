import React from 'react'

import photo1 from '../../images/honkan2021.jpg';

const honkan2021: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>Febrary,2021</p>
            <h1>本館投影-自然-</h1>
          </div>
          <img src={photo1} alt="photo"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
          <div className='content'>
            去年のリベンジ
          </div>
        </div>

        <h1 className="title">概要</h1>
        <div className='contents'>
          <div className='content'>
            光が動き回って，さまざまな姿をした建物を旅するプロジェクションマッピング
            <br />
            素材から自分たちで作成した．
            <br />
            イルカのアニメーションや建物が崩れ落ちるアニメーションを特にこだわって作成した．
          </div>
        </div>
        <div className="movie">
          <iframe
            src={`https://www.youtube.com/embed/AZR9w-IBweA`}
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
            去年の映像の位置ズレ問題をもとに，反省を活かして下絵補正を行なった．
            <br />
            また，建物全体に投影できるようにプロジェクタの位置を変えるなどの工夫を行なった．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default honkan2021;