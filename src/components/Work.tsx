import React from 'react';
import { Link } from 'react-router-dom';
// import Page404 from './Page404';

export type WorkProps = {
    workName: string;
    workDescription: string;
    workImage: string;
    classJudge: string;
    isVisible?: boolean;
    workComponent?: string;
}

export const Work: React.FC<WorkProps> = ({
    workName,
    workDescription,
    workImage,
    classJudge,
    isVisible = true,
    workComponent,
}) => {
    if (!isVisible) return null;
    if (workComponent == "") {
        return (
            <div className="work">
                <img src={workImage} alt="workImage"/>
                <div className="sentences">
                    <h3 className={classJudge}>{workName}</h3>
                    <p>{workDescription}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="work">
                <img src={workImage} alt="workImage"/>
                <div className="sentences">
                    <h3 className={classJudge}>{workName}</h3>
                    <p>{workDescription}</p>
                    {/* <p>{workComponent}</p> */}
                    <Link to={`${workComponent}`}>＞Details</Link>
                </div>
            </div>
        );
    }
};