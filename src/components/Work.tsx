import React from 'react';
import logo2 from '../images/meowbit.jpg';

export type WorkProps = {
    workName: string;
    workDescription: string;
    isVisible?: boolean;
}

export const Work: React.FC<WorkProps> = ({
    workName,
    workDescription,
    isVisible = true,
}) => {
    if (!isVisible) return null;
    return (
        <div className="work">
            <img src={ logo2 }/>
            <div className="sentences">
                <h3>{workName}</h3>
                <p>{workDescription}</p>
            </div>
        </div>
    );
};