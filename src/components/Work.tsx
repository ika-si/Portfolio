import React from 'react';

export type WorkProps = {
    workName: string;
    workDescription: string;
    workImage: string;
    classJudge: string;
    isVisible?: boolean;
}

export const Work: React.FC<WorkProps> = ({
    workName,
    workDescription,
    workImage,
    classJudge,
    isVisible = true,
}) => {
    if (!isVisible) return null;
    return (
        <div className="work">
            <img src={workImage}/>
            <div className="sentences">
                <h3 className={classJudge}>{workName}</h3>
                <p>{workDescription}</p>
            </div>
        </div>
    );
};