import React from 'react';
import logo from './images/logo.png';
import { Work } from './components/Work';
import  Navbar  from './components/Navbar';
import Top from './components/Top';
import Portfolio  from './components/Portfolio';
import  About  from './components/About';
import { workList } from "./data";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">

      <Router>
        
        <Navbar />

          <Route exact path='/' component={Top}/>
          <Route path='/Portfolio/' component={Portfolio}/>
          <Route path='/About/' component={About}/>
        
      </Router>

      {/* <img src={logo} className="logo" alt="logo"/> */}
      <footer></footer>
    </div>
  );
}

export default App;
