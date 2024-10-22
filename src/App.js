import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <About />
        <Projects />
      </header>
      <footer className="App-footer">
        <p>©Copyright 2024 Sayaka Chishiki Jakobsson</p>
      </footer>
    </div>
  );
}

export default App;
