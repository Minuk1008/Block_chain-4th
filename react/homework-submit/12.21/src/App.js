import Calc from './Calc';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calc />
      </header>
    </div>
  );
}

export default App;
