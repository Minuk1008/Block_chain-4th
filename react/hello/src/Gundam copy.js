// function Gundam(props) {
//     return <h2>This is {props.gundamName.model} !</h2>
// }

// function Archangel() {
//     const gundamInfo = {
//         camp: "Earth",
//         model: "X109",
//         engine: "Atomic",
//         year: "Cosmic 70",
//         pilot: "Kira Yamato"
//     };

//     return (
//         <>
//             <h1>Which gundam in Archangle ?</h1>
//             <Gundam gundamName = {gundamInfo}/>
//         </>
//     )
// }

function Gundam(props) {
    return <h2>This is {props.model} !</h2>
}

function Archangel() {
    return (
        <>
            <h1>Which gundam in Archangle ?</h1>
            <Gundam model = "ZGMF-X10A"/>
        </>
    )
}


export default Archangel;