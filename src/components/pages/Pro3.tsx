import React from 'react'

import photo1 from '../../images/interaction2022_1.png';
import photo2 from '../../images/interaction2022_2.png';

const Pro3: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>Mar,2022（学部3年）</p>
            <h1>ソーシャルディスタンス誘導のための
            人物照合機能を備える
            <br />
            プロジェクションマッピング</h1>
            <h3>情報処理学会 インタラクション2022 ポスター発表</h3>
          </div>
          <img src={photo1} alt="本研究の特徴"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
          <p className='content'>
            {/* 3年プロジェクト（授業） */}
            {/* <br /> */}
            カフェで並んでいるときに，子供が白線に沿って並ぶことを嫌がっている様子を見て思いついた
          </p>
        </div>

        <h1 className="title">システム概要</h1>
        <div className='contents'>
          <img src={photo2} alt="提案システム概要" />
          <p className='content'>
            ①ユーザ同士が近づくほど映像が薄れていく
            <br />
            →ソーシャルディスタンスを取るためではなく，映像を見るためにユーザに距離をとってもらうことを促す．
            <br />
            ②人物照合を用いたユーザIDの特定
            <br />
            →個人に即した映像を提示することができる
          </p>

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/71UNur3GjK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
        <div className="movie">
          <iframe
            src={`https://www.youtube.com/embed/71UNur3GjK4`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

        <h1 className="title">ツール</h1>
        <div className='contents'>
          <div className='content'>
            RealSense，Python（Cubemosでの骨格検出）
            TouchDesigner
          </div>
        </div>


        <h1 className="title">取り組み</h1>
        <div className='contents'>
          <p className='content'>
            cubemosのSkeleton Tracking SDK，Intel RealSense SDK2.0による骨格検出
            <br />
            3次元空間での骨格位置推定
            <br />
            ユーザ間の距離測定
            <br />
            TouchDesignerによるグラフィック
            <br />
            深層学習のためのデータセット作成
          </p>
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>
            初めての学会発表で，オンライン開催だったが多くの人にアドバイスをいただけた貴重な機会でした．
            システム全体の構成からセンシング，グラフィックに至るまで色々なパターンで試して検証したいと思った．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default Pro3;