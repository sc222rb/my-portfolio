import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-black">
        <Home />
        <About />
        <Projects />
      </header>
      <footer className="p-4 text-xs">
        <p>&copy;Copyright 2024 Sayaka Chishiki Jakobsson</p>
      </footer>
    </div>
  );
}

export default App;
