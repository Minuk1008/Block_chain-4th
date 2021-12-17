import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car from './Car';
// import Gundam from './Gundam';
import Gundam from './Gundam1';
// import Archangel from './Archangel';
import Archangel from './Archangel copy';
// import Archangel from './Gundam copy';
import Headercomp from './Headercomp';
import Container from './Container';
import Child from './Container';
import Football from './Football';
import Goal from './Goal';
import Fate from './Fate';
import reportWebVitals from './reportWebVitals';

const characters = ['Siro', 'Saber', 'Archer', 'Tosaka Lyn', 'Verserker']

// class Gundam extends React.Component { //건담(상위값)을 컴포넌트(하위값)에 상속해줌 
//   constructor(props) { //props가 property
//       super(props);
//   }

//   render() {
//       return <h1>This Gundam is {this.props.model} !</h1>
//   }
// }
// 여기 index에서도 사용 가능하지만 실제로 개발할때는 사용 안하는게 좋음. 워낙 코드가 길어져서

// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam cargo="Archangle"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Headercomp newTitle = "new title !"/>
//   </React.StrictMode>,
//   document.getElementById('header')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Goal isGoal = {false}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <Archangel />
  </React.StrictMode>,
  document.getElementById('root')
);

// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const myElement = <h1>I Love React !!!!</h1>;
// const myElement = <h1>React is {5+5} times better with JSX</h1>;
// const myElement = React.createElement('h1', {} , 'Did not use jsx')
// const myElement = (
//   <ul>
//     <li>Apple</li>
//     <li>Google</li>
//     <li>Amazon</li>
//     <li>Facebook</li>
//   </ul>
// )
// const myElement = (
//   <div>
//     <h1>Hello World</h1>
//     <p>I love React and nodejs !!!</p>
//   </div>
// );

// const myElement = (
//   <input type="text"/>
// );

// const myElement = <h1 className='myClass'>Hello World</h1>

// const x = 11;
// let txt = "Hello World!!!";
// if(x < 10) {
//   txt = "Hello"
// }

// const myElement =<h1>{txt}</h1>; //


// ReactDOM.render(myElement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
