import React from 'react';

import  Navbar  from './components/Navbar';
import Portfolio  from './components/Portfolio';
import  About  from './components/About';
import ScrollToTop from './components/ScrollToTop';

import honkan2021 from './components/pages/honkan2021';
import honkan2020 from './components/pages/honkan2020';
import kaleidoscope from './components/pages/kaleidoscope';
import ARJS from './components/pages/ARJS';
import addIkimono from './components/pages/addIkimono';
import PM2022 from './components/pages/PM2022';
import PM2021 from './components/pages/PM2021';
import PM2020 from './components/pages/PM2020';
import PM2019 from './components/pages/PM2019';
import cleanSea from './components/pages/cleanSea';
import LINEBot from './components/pages/LINEBot';
import chatTable from './components/pages/chatTable';
import Pro3 from './components/pages/Pro3';
import Pro4 from './components/pages/Pro4';

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
        <ScrollToTop />
        <Route exact path='/' component={Portfolio}/>
        {/* <Route path='' component={Portfolio}/> */}
        <Route path='/Work/' component={Portfolio}/>
        <Route path='/About/' component={About}/>
        
        <Route path="/honkan2021/" component={honkan2021} />
        <Route path="/honkan2020/" component={honkan2020} />
        <Route path="/kaleidoscope/" component={kaleidoscope} />
        <Route path="/ARJS/" component={ARJS} />
        <Route path="/addIkimono/" component={addIkimono} />
        <Route path="/PM2019/" component={PM2019} />
        <Route path="/PM2020/" component={PM2020} />
        <Route path="/PM2021/" component={PM2021} />
        <Route path="/PM2022/" component={PM2022} />
        <Route path="/cleanSea/" component={cleanSea} />
        <Route path="/LINEBot/" component={LINEBot} />
        <Route path="/chatTable/" component={chatTable} />
        <Route path="/Pro3/" component={Pro3} />
        <Route path="/Pro4/" component={Pro4} />
        
      </Router>

      <footer>

      </footer>
    </div>
  );
}

export default App;
