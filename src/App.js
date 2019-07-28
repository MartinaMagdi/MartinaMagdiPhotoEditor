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
          <Route exact path="/" component={Portfolio} />
          {/* <Route exact path="/work-experience" component={WorkExperience} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          {/* <Route path="/skills" component={Skills} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
