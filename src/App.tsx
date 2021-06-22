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
          <a href="/">My Notes</a>
        </h1>
        <nav className="pc-nav">
          <ul>
            <li><a href="./">Portfolio</a></li>
            <li><a href="./">About</a></li>
          </ul>
        </nav>
      </header>

      <main className="work-list">
        {workList.map((props, index) => (
          <Work key={index} {...props}/>
        ))}
      </main>

      {/* <img src={logo} className="logo" alt="logo"/> */}
      <footer></footer>
    </div>
  );
}

export default App;
