// import React from "react";

import { useState } from "react";

// class Gundam extends React.Component { //건담(상위값)을 컴포넌트(하위값)에 상속해줌 
//     constructor(props) { //props가 property
//         super(props);
//         this.state = {
//             camp: "Earth",
//             model: "X109",
//             engine: "Atomic",
//             year: "Cosmic 70",
//             pilot: "Yamato"
//         };
//     }

//     //getDrivedStateFromProps() {} 호출?? 이게 뭐임
//     changeModel = () => {
//         this.setState({model: "X109 Justice"});
//     }

//     render() {
//         return (
//         <div>
//             <h1>{this.state.model}</h1>
//             <h2>The camp is {this.state.camp}</h2>
//             <h2>The engine is {this.state.engine}</h2>
//             <h2>The Pilot Name is {this.state.pilot}</h2>
//             <h2>{this.state.year} Space Centry</h2>
//             <h2>The Cargo is {this.props.cargo}</h2>
//             <button type="button" onClick={this.changeModel}>Change Model</button>
//         </div>
//         )
//     }
// }

const Gundam = (props) => {
    const [camp, setCamp] = useState('Earth');
    const [model, setModel] = useState("X109");
    const [engine, setEngine] = useState("Atomic");
    const [year, setYear] = useState("Cosmic 70");
    const [pilot, setPilot] = useState("Yamato");

  const ChangeModel = () => {
        const [model, setModel] = useState("X109 Justice");
    }

    return ( 
        <div>
            <h1>{model}</h1>
            <h2>The camp is {camp}</h2>
            <h2>The engine is {engine}</h2>
            <h2>The pilot is {pilot}</h2>
            <h2>{year} Space Centry</h2>
            <h2>The cargo is {props.cargo}</h2> 
            <button type ="button" onClick={() => setModel("X109 Justice") }>Change Model</button>         
        </div>
        );
};
export default Gundam;