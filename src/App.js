import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import HomeJP from './components/HomeJP';
import About from './components/About';
import AboutJP from './components/AboutJP';
import Projects from './components/Projects';
import ProjectsJP from './components/ProjectsJP';

function App() {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'EN' ? 'JP' : 'EN'));
  };

  return (
    <div className="App text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-black">
      <div className="language-toggle-container">
        <button onClick={toggleLanguage} className="language-toggle">
        {language === 'EN' ? '日本語' : 'English'}
        </button>
      </div>
        <div className="mb-10">
          {language === 'EN' ? <Home /> : <HomeJP />}
        </div>
        <div className="mb-10">
          {language === 'EN' ? <About /> : <AboutJP />}
        </div>
        <div className="mb-10">
          {language === 'EN' ? <Projects /> : <ProjectsJP />}
        </div>
      </header>
      <footer className="p-4 text-xs">
        <p>&copy;Copyright 2024 Sayaka Chishiki Jakobsson</p>
      </footer>
    </div>
  );
}

export default App;
