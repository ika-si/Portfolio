import { WorkProps } from "./components/Work";

import image14 from './images/pm2019.png';
import image13 from './images/pm2020.png';
import image12 from './images/pochama.png';
import image11 from './images/honkan2020.jpg';
import image10 from './images/honkan2021.jpg';
import image09 from './images/addIkimono.png';
import image08 from './images/kaleidoscope.jpg';
import image07 from './images/pm2022.jpg';
import image06 from './images/interaction2023_1.png';
import image05 from './images/interaction2022.jpeg';
import image04 from './images/chattable.png';
import image03 from './images/pm2021.png';
import image02 from './images/linebot.jpg';
import image01 from './images/sea.jpg';

export const workList: WorkProps[] = [
    {
        workName:"バーチャル万華鏡",
        workDescription:"作成中",
        workImage: image08,
        classJudge: "codework",
        isVisible:true,
        workComponent: "/kaleidoscope/"
    },
    {
        workName: "ユーザの位置計測に基づいた自然なインタラクション遷移を実現するデジタルサイネージシステム",
        workDescription: "情報処理学会　インタラクション2023　ポスター発表",
        workImage: image06,
        classJudge: "codework",
        isVisible: true,
        workComponent: "/Pro4/",
    },
    {
        workName: "お祭り-人魂アート-",
        workDescription: "Proejction Mapping2022",
        workImage: image07,
        classJudge: "pmwork",
        isVisible: true,
        workComponent: "/PM2022/"
    },
    {
        workName: "ソーシャルディスタンス誘導のための人物照合機能を備えるプロジェクションマッピング",
        workDescription: "情報処理学会　インタラクション2022　ポスター発表",
        workImage: image05,
        classJudge: "codework",
        isVisible: true,
        workComponent: "/Pro3/",
    },
    {
        workName: "cat world",
        workDescription: "Proejction Mapping2021",
        workImage: image03,
        classJudge: "pmwork",
        isVisible: true,
        workComponent: "/PM2021/"
    },
    {
        workName:"chatTable",
        workDescription:"チャットと時間割をかけ合わせたWebアプリ",
        workImage: image04,
        classJudge: "codework",
        isVisible:true,
        workComponent: "/chatTable/",
        // pageURL:"https://chattable-umelab.web.app/"
    },
    {
        workName:"ARポッチャマ",
        workDescription:"AR.js",
        workImage: image12,
        classJudge: "codework",
        isVisible:true,
        workComponent: "/ARJS/"
    },
    {
        workName: "LINE Bot",
        workDescription: "LINEBotでカンタン復習",
        workImage: image02,
        classJudge: "codework",
        isVisible: true,
        workComponent: "/LINEBot/",
    },
    {
        workName:"もっといきもの",
        workDescription:"P5.js\n音声認識を用いたプロジェクションマッピング",
        workImage: image09,
        classJudge: "codework",
        isVisible:true,
        workComponent: "/addIkimono/",
    },
    {
        workName: "『clean sea』",
        workDescription: "Processingを使用した海洋ゴミをクリックで取り除くゲーム",
        workImage: image01,
        classJudge: "codework",
        isVisible: true,
        workComponent: "/cleanSea/",
    },
    {
        workName: "自然",
        workDescription: "本館投影2021",
        workImage: image10,
        classJudge: "pmwork",
        isVisible: true,
        workComponent: "/honkan2021/"
    },
    {
        workName: "イルカと妖精さんの絵本作品 ~Miracle of Forest Floating in The Sea~ ",
        workDescription: "Proejction Mapping2020",
        workImage: image13,
        classJudge: "pmwork",
        isVisible: true,
        workComponent: "/PM2020/"
    },
    {
        workName: "バレンタイン",
        workDescription: "本館投影2020",
        workImage: image11,
        classJudge: "pmwork",
        isVisible: true,
        workComponent: "/honkan2020/"
    },
    {
        workName: "時代 ",
        workDescription: "Proejction Mapping2019",
        workImage: image14,
        classJudge: "pmwork",
        isVisible: true,
        workComponent: "/PM2019/"
    },
    {
        workName:"見られているよ",
        workDescription:"three.js",
        workImage: image01,
        classJudge: "codework",
        isVisible:false,
    },
    {
        workName:"",
        workDescription:"",
        workImage: image01,
        classJudge: "pmwork",
        isVisible:false,
    }
    
]