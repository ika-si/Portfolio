import { WorkProps } from "./components/Work";
import image01 from './images/honkanpm2020.jpg';
import image02 from './images/honkanpm2021.jpg';
import image03 from './images/jyukusaipm2019.png';
import image04 from './images/jyukusaipm2020.jpg';
import image05 from './images/chattable.png';
import image06 from './images/meowbit.jpg';
import image07 from './images/timetable.jpg';
import image08 from './images/sea.jpg';
import image09 from './images/usagi.jpg';
import image10 from './images/usagi.jpg';
import image11 from './images/block.png';
import image12 from './images/meowbit.jpg';


export const workList: WorkProps[] = [
    {
        workName: "バレンタイン -本館投影2020-",
        workDescription: "ProjectionMapping",
        workImage: image01,
        classJudge: "pmwork",
        isVisible: true
    },
    {
        workName:"自然 -本館投影2021-",
        workDescription:"ProjectionMapping",
        workImage: image02,
        classJudge: "pmwork",
        isVisible:true
    },
    {
        workName:"時代 -津田塾祭2019-",
        workDescription:"ProjectionMapping",
        workImage: image03,
        classJudge: "pmwork",
        isVisible:true
    },
    {
        workName:"Book -津田塾祭2020-",
        workDescription:"ProjectionMapping",
        workImage:image04,
        classJudge: "pmwork",
        isVisible:true
    },
    {
        workName:"chatTable",
        workDescription:"チャットと時間割をかけ合わせたWebアプリ",
        workImage: image05,
        classJudge: "codework",
        isVisible:true
    },
    {
        workName:"ひよこ旅",
        workDescription:"Meowbitで作成したゲーム",
        workImage: image06,
        classJudge: "codework",
        isVisible:true
    },
    {
        workName: "TimeTableアラーム",
        workDescription: "定時刻にその日の時間割を知らせてくれるLINEBot",
        workImage: image07,
        classJudge: "codework",
        isVisible: true
    },
    
    {
        workName: "『sea』",
        workDescription: "Processingを使用した海洋ゴミをクリックで取り除くゲーム",
        workImage: image08,
        classJudge: "codework",
        isVisible: true
    },
    {
        workName: "うさちゃんゲーム",
        workDescription: "KinectとProcessingを使用した体を使うゲーム",
        workImage: image09,
        classJudge: "codework",
        isVisible: true
    },
    {
        workName:"歯磨き支援アプリ",
        workDescription:"歯磨きをしている時間を測り、歯磨きができた時間に応じてユーザに褒め言葉をかけるアプリ",
        workImage: image10,
        classJudge: "codework",
        isVisible:false
    },
    {
        workName:"ブロック崩し",
        workDescription:"Unityで作ったブロック崩しゲーム",
        workImage: image11,
        classJudge: "codework",
        isVisible: true
    },
    {
        workName:"",
        workDescription:"",
        workImage: image12,
        classJudge: "pmwork",
        isVisible:false
    }
    
]