import logo from './logo.svg';
import mylogo from './mylogo.svg'
import './App.css';
import Hello from './hello';
import Goodbye from './Goodbye';
import JSXExamples from './component/JSXExamples.jsx'

function App() {
  return (
    <div className="App">
      <Hello/>
      <header className="App-header">
        <img src={mylogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Goodbye/>
      <JSXExamples/>
    </div>
  );
}

export default App;
