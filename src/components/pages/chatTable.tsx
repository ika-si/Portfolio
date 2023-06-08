import React from 'react'

import photo1 from '../../images/chattable2.png';
import photo2 from '../../images/timetable.png';

const chatTable: React.FC = () => {
  return(
    <div className="App">
      <div className='contents-list'>
        <div className='main-contents'>
          <div className="main-title">
            <p className='date'>2020~2021年（学部2,3年）</p>
            <h1>chatTable</h1>
          </div>
          <img src={photo1} alt="chatTable画像" />
        </div>

        <h1 className="title">取り組むきっかけ</h1>
        <div className='contents'>
          <div className='content'>
            Yahoo!のハッカソン
            <br />
            コロナ禍で同じ授業をとっている人とコミュニケーションが取れなくなったことから発案．
          </div>
        </div>

        <h1 className="title">内容</h1>
        <div className='contents'>
          <img src={photo2} alt="timetable" />
          <p className='content'>
            ①タームの切り替え
            <br />
            T1~T4の切り替え
            <br />
            ②授業の追加
            <br />
            授業を追加するとroomボタンが出現
            <br />
            roomに入ると同じ授業をとったメンバーを把握可能
            <br />
            メンバーとのチャット
            <br />
            ③授業の変更
            <br />
            授業の変更可能
            <br />
            その後，もう一度授業を登録し直すと新しいroomに入ることが可能
            <br />
            ④プロフィール
            <br />
            同じ授業をとっている人に公開
            <br />
            TwitterやInstagramのアカウント登録
          </p>
        </div>
        <h1 className="title">振り返り</h1>
        <div className='contents'>
          <div className='content'>
            ２年間保守・運用し，700人に使ってもらうことができた．
            津田塾生以外にも触れてもらえるようなアプリケーションを作れるようになりたい．
          </div>
        </div>
        
      </div>
        
    </div>
  )
}


export default chatTable;