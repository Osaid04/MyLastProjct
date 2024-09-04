import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainSkills from './components/MainSkills/main-skills';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Project'
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'; // Import LanguageSwitcher
function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* header is out the rout becuse its want to sowne in all pages*/ } 
        <LanguageSwitcher /> {/* Add LanguageSwitcher here */}
        <Routes>
         
          <Route path="/skills" element={<MainSkills />} />
          <Route path="/projects" element={<Projects/>} />
         <Route path="/Contact" element={<Contact/>}/>
         <Route path="/AboutMe" element={<AboutMe/>}/>
          <Route path="/" element={<Main />} />{/*path=/ mean that i need this component main to showne in this page*/ }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
