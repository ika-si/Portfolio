import React from 'react'

import photo1 from '../../images/pm2020.png';

const PM2020: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>October,2020</p>
            <h1>イルカと妖精さんの絵本作品 ~Miracle of Forest Floating in The Sea~ </h1>
          </div>
          <img src={photo1} alt="photo"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
         <div className='content'>
            津田塾祭での展示
            <br />
            Nakedの作品を見て，日常のものに+αできる作品を作りたいと思ったから．
          </div>
        </div>

        <h1 className="title">概要</h1>
        <div className='contents'>
          <div className='content'>
          「「ふたり」ならどうな困難な道も乗り越えられる」がテーマとなったこの作品は，今のこの状況下にで生きる皆様に伝えたいことがつまっている．
            <br />
            この作品は泳ぐのが苦手なイルカが嵐によって群れと離れ離れになってしまうところから始まる.見知らぬ地で出会った妖精さんと一緒に笑って，一緒に困難を乗り越えていくストーリー．
            <br />
            コロナをみんなで乗り越えていく意志を込めた．
          </div>
        </div>
        <div className="movie">
          <iframe
            src={`https://www.youtube.com/embed/AcUIZv7Qwgc`}
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
            素材から全て自分たちで作り切れた．
            動物や人のアニメーションの勉強ができた．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default PM2020;