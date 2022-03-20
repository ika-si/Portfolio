import { WorkProps } from "./components/Work";

import image05 from './images/realsense.jpg';
import image04 from './images/chattable.png';
import image03 from './images/cat.png';
import image02 from './images/linebot.jpg';
import image01 from './images/sea.jpg';

export const workList: WorkProps[] = [
    {
        workName: "ソーシャルディスタンス誘導システム",
        workDescription: "情報処理学会　インタラクション2022　ポスター発表",
        workImage: image05,
        classJudge: "pmwork",
        isVisible: true,
        workComponent: "/Pro3/",
    },
    {
        workName:"chatTable",
        workDescription:"チャットと時間割をかけ合わせたWebアプリ",
        workImage: image04,
        classJudge: "codework",
        isVisible:true,
        workComponent: "chatTable",
        // pageURL:"https://chattable-umelab.web.app/"
    },
    {
        workName: "Proejction Mapping",
        workDescription: "プロジェクションマッピング　3年分",
        workImage: image03,
        classJudge: "pmwork",
        isVisible: true,
        workComponent: "/PM/"
    },
    {
        workName: "LINE Bot",
        workDescription: "LINEBotでカンタン復習",
        workImage: image02,
        classJudge: "codework",
        isVisible: true,
    },
    {
        workName: "『clean sea』",
        workDescription: "Processingを使用した海洋ゴミをクリックで取り除くゲーム",
        workImage: image01,
        classJudge: "codework",
        isVisible: true,
    },

    {
        workName:"",
        workDescription:"",
        workImage: image01,
        classJudge: "pmwork",
        isVisible:false,
    }
    
]