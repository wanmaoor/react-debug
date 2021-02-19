import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    const a = 2
    const b = 1

    const result = a + b
    console.log(result);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey! U son of bitch, Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
