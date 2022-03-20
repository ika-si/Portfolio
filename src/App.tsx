import React from 'react';

import  Navbar  from './components/Navbar';
import Portfolio  from './components/Portfolio';
import  About  from './components/About';
import ProMap from './components/pages/PM'
import Pro3 from './components/pages/Pro3'
import chatTable from './components/pages/chatTable';

import { HashRouter as Router, Route } from 'react-router-dom';

import './styles/App.css';
import './styles/Portfolio.css';
import './styles/About.css';
import './styles/Top.css';
import './styles/Contents.css';

const App: React.FC = () => {

  return (
    <div>
      
      <Router basename="/">
        
      <Navbar />

        <Route exact path='/' component={Portfolio}/>
        {/* <Route path='' component={Portfolio}/> */}
        <Route path='/Work/' component={Portfolio}/>
        <Route path='/About/' component={About}/>
        
        <Route path="/PM/" component={ProMap} />
        <Route path="/Pro3/" component={Pro3} />
        <Route path="/chatTable/" component={chatTable} />
        
      </Router>

      <footer>

      </footer>
    </div>
  );
}

export default App;
