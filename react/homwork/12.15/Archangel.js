// import React from "react";

// class Gundam extends React.Component {
//     render() {
//         return <h2>This is Freedom gundam</h2>;
//     }
// }

function Gundam() {
    return <h2>This is Freedom gundam</h2>
}

// class Archangel extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h1>Who lives in Archangel ?</h1>
//                 <Gundam />
//             </div>
//         );
//     }
// }

function Archangel() {
    return (
        <div>
            <h1>Who lives in Archangel ?</h1>
            <Gundam />
        </div>
    )
}

export default Archangel;