import React from 'react'

import photo1 from '../../images/linebot2.jpg';

const LINEBot: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>September,2021</p>
            <h1>LINEBot</h1>
          </div>
          <img src={photo1} alt="photo"/>
        </div>

        <h1 className="title">きっかけ</h1>
        <div className='contents'>
          <div className='content'>
            教職課程の授業
          </div>
        </div>

        <h1 className="title">システム概要</h1>
        <div className='contents'>
          <div className='content'>
            授業補助のためのLINEBotの開発
            <br />
            GASを用いてLINE Message APIを使用し，スプレットシートに値の読み書きを行った．
            <br />
            授業の前後に行われる小テストを生徒がいつでも行えるようにLINEBotで実装．教師が使用しやすいシステムを目指した．
            <br />
            教師が問題をスプレットシートに書き込むと，その内容がLINEで生徒に送信される．
            <br />
            生徒が解答すると，LINEBotから正解不正解が１問ずつ送信される．
            <br />
            解答内容と正解不正解の判定がスプレットシートに書き込まれ，教師が確認できる仕組みになっている．
          </div>
        </div>

        <h1 className="title">ツール</h1>
        <div className='contents'>
          <div className='content'>
            GAS
          </div>
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>
            教師が使いやすいツールになることを意識したため，使いやすくなった．
            <br />
            教育実習では，実際に生徒に使ってもらいたい．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default LINEBot;