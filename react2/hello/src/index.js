import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car from './Car';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>,
  document.getElementById('root')
);

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

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
