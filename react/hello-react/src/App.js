import UserList from './UserList';
import InputExam from './InputExam';
import logo from './logo.svg';
import './App.css';
import UserManage from './UserManage';
import Box from './Box';
import Reactcss from './Reactcss';
import Circle from './CircleDiv';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header2">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
      <div>
      <Circle color='blue'>성진쨩</Circle>
      </div>
    </>
  );
}

// function App() {
//   return (
//     <div>
//       <div>
//         <img src={logo} className="App-logo" alt = "logo" />
//       </div>
//       <Block4 />
//     </div>
//   );
// }

export default App;
