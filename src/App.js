import React from 'react';
import './app.scss';
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <body>
      <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
    </body>
    
  );
}

export default App;
