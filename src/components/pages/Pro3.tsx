import React from 'react'

import photo1 from '../../images/interaction1.png';
import photo2 from '../../images/interaction2.png';

const Pro3: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents contents'>
          <h1 className="main-title">ソーシャルディスタンス誘導のための
          <br />
          人物照合機能を備える
          <br />
          プロジェクションマッピング</h1>
          {/* <h3>情報処理学会 インタラクション2022 ポスター発表</h3> */}
          {/* <div className='content'> */}
            <img src={photo1} alt="本研究の特徴" />
          {/* </div> */}
        </div>

        <h1 className="title">概要</h1>
        <div className='contents'>
          <div className='content'>

            <p>
            新型コロナウイルス感染症流行に伴い，2m 以上のソーシャルディスタンスを保つことが，感染症を予防する重要な手段の一つである.
            店舗やイベントでは，ソーシャルディスタンスを保つための目印として2m間隔の白線が床や地面に引かれている.
            しかしながら，この方法は，ユーザが白線に合わせて行動する必要がある.
            これは，ユーザの行動を制限することになる.
            このような問題に対処するために，本研究では，プロジェクションマッピングを用いたユーザの行動を制限しないソーシャルディスタンス誘導システムを提案する.
            提案システムの特徴は以下の二つである.
            一つは，RGB-D カメラにより計測するユーザ間の距離に応じて，プロジェクションマッピングの映像の透明度を変化させることである.
            これにより，ユーザ間の距離が近づいていることをユーザに事前に視覚的に知らせることができる.
            二つ目の特徴は，ストーリー性のあるユーザ特有のプロジェクションマッピング行うことで，ユーザを飽きさせることなくソーシャルディスタンスを誘導することである.
            これを実現するために，深層学習に基づく個人照合システムを構築し，観測環境に存在するユーザの特定を行う.
            これにより，ユーザの動きを制限せずに， かつ飽きさせることなくソーシャルディスタンスを保たせることができる.
            </p>
            
          </div>
        </div>

        <h1 className="title">システム概要</h1>
        <div className='contents'>

          <div className='content'>
            
            <p>

            </p>

          </div>
          <img src={photo2} alt="提案システム概要" />
        </div>

        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>

          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default Pro3;