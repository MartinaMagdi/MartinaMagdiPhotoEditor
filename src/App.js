import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
// import Skills from './components/Skills'
// import WorkExperience from './components/WorkExperience'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/work-experience" component={WorkExperience} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          {/* <Route path="/skills" component={Skills} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
