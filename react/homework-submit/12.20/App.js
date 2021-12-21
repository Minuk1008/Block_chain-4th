import logo from './logo.svg';
// import Wow from './Wow';
// import Counter from './Counter';
// import Jsxtest from './Jsxtest';
// import Jsxcss from './Jsxcss';
import './App.css';
// import Block4 from './Block4';
import Block4 from './Block4 copy';
import Homework20 from '../../homwork/12.20/homework20';
import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello World!</h1>
//     </div>
//   );
// };
function App() {
  return (
    <div>
      <div>
        <img src={logo} className="App-logo" alt = "logo" />
      </div>
      <Homework20 />
    </div>
  );
}

export default App;
