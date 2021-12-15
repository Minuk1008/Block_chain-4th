// import React from 'react'

import { useState } from "react";

// class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = {color : "red"};
//     }

//     render() {
//         // return <h1>This is my {this.state.color} Car !</h1>; //state 라는 속성값에서 color를 가져오는 방식
//         return <h1>This is my {this.props.color} Car !</h1>; 
//     }
// }

function Car() {
    const [message, setMessage] = useState("red");

    return <h1>This is my {message} Car</h1>
}

export default Car;