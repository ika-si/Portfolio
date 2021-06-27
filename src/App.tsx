import React from 'react';

import  Navbar  from './components/Navbar';
import Top from './components/Top';
import Portfolio  from './components/Portfolio';
import  About  from './components/About';
import { HashRouter as Router, Route } from 'react-router-dom';

import './styles/App.css';
import './styles/Portfolio.css';
import './styles/About.css';

const App: React.FC = () => {

  return (
    <div className="App">
      
      <Router basename="">
        
        <Navbar />

        <Route exact path='/' component={Top}/>
        <Route path='/Work/' component={Portfolio}/>
        <Route path='/About/' component={About}/>
        
      </Router>

      <footer></footer>
    </div>
  );
}

export default App;
