function Car(props) {
    return <h2>This is my {props.color} car!!!</h2>
}

function Garage() {
    return (
        <>
            <h1>My Garage in the wich cart !!</h1>
            <Car />
        </>
    )
}

export default Garage;