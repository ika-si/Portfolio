import React from 'react';
import logo from './images/logo.png';
import { Work } from './components/Work';
import { workList } from "./data";
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>
          <a href="/">Notes</a>
        </h1>
        <nav className="pc-nav">
          <ul>
            <li><a href="home">Portfolio</a></li>
            <li><a href="blog">About</a></li>
          </ul>
        </nav>
      </header>
      <div className="">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <main className="app_work-list">
          {workList.map((props, index) => (
            <Work key={index} {...props}/>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
