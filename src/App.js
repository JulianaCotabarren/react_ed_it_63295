import logo from './logo.svg';
import './App.css';
import ComponenteClase from './components/ComponenteClase';
import PasarProps from './components/PasarProps';
import ComponenteFuncional from './components/ComponenteFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <ComponenteClase/>
      <hr/>
      <PasarProps string="undato de tipo string"/>
      <hr/>
      <ComponenteFuncional nombre="Pepa"/>
    </div>
  );
}

export default App;
