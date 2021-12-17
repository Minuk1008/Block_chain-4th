function Gundam(props) {
    return <li>This is {props.model} !</li>;
}

// function Archangel() {
//     const gundamList = [
//         "ZMGF-X10A Freedom Gundam",
//         "ZMGF-X109 Justice Gundam",
//         "Strike Gundam"
//     ];

//     return (
//         <>
//             <h1>which Gundam lives in Archangle ?</h1>
//             <ul>
//                 {gundamList.map((robot) => <Gundam model = {robot}/>)}
//             </ul>
//         </>
//     );
// }

function Archangle() {
    const gundams = [
        {id: 1, model: "ZMGF-X10A Freedom Gundam"},
        {id: 2, model: "ZMGF-X109 Justice Gundam"},
        {id: 3, model: "Sword Strike Gundam"}
    ];

    return (
        <>
            <h1>Which Gundam lives in Archangle?</h1>
            <ul>
                {gundams.map((mobileSuite) => <Gundam key = {mobileSuite.id} model= {mobileSuite.model}/>)}
            </ul>
        </>
    );
}

export default Archangle;