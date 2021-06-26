import React from 'react';

import  Navbar  from './components/Navbar';
import Top from './components/Top';
import Portfolio  from './components/Portfolio';
import  About  from './components/About';
import { BrowserRouter, HashRouter as Router, Route, useHistory } from 'react-router-dom';

import './styles/App.css';

const App: React.FC = () => {

  const history = useHistory();
  const localhost = "http://localhost:3000/";
  const githubLink = "https://ika-si.github.io/";
  return (
    <div className="App">
      
      <Router basename="">
        
        <Navbar />

        <Route exact path='/' component={Top}/>
        <Route path='/Portfolio/' component={Portfolio}/>
        <Route path='/About/' component={About}/>
        
      </Router>

      <footer></footer>
    </div>
  );
}

export default App;
