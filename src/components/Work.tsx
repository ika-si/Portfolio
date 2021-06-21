import React from 'react';

export type WorkProps = {
    workName: string;
    workDescription: string;
}

export const Work: React.FC<WorkProps> = ({
    workName,
    workDescription,
}) => {
    return (
        <dl>
            <dt>{workName}</dt>
            <dd>{workDescription}</dd>
        </dl>
    );
};