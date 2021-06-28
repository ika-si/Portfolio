import React from 'react';
import { Work } from './Work';
import { workList } from "../data";


const Portfolio: React.FC = () => {
    return(
        <div className="App">
            <h1 className="title">Work</h1>
            <main className="work-list">
                {workList.map((props, index) => (
                    <Work key={index} {...props}/>
                ))}
            </main>
        </div>
    )
}


export default Portfolio;