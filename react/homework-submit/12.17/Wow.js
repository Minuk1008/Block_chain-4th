import React, {useState} from "react";

function Wow() {
    const [number, setNumber] = useState(0);
    const [title, setTitle] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNumber(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const Add = () => {
        const num1 = Number(number.num1)
        const num2 = Number(number.num2)

        setTitle(num1 + num2)
        console.log(num1 + num2)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <h1>Calc Result {title}</h1>
                Enter Calc Number: 
                <input type="number" name="num1" value={number.num1 || ""} onChange={handleChange}/>
            </label>
            <label>
                <input type="number" name="num2" value={number.num2 || ""} onChange={handleChange}/>
            </label>
            <button onClick={Add}>Add</button>
            {/* <button onClick={Sub}>Sub</button>
            <button onClick={Mult}>Mult</button>
            <button onClick={Divi}>Divi</button> */}
            <br></br>
            {/* <label>
                <h1>Text add Result</h1>
                Enter Your String: 
                <input type="text" name="str1" value={input.str1 || ""} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name="str2" value={input.str2 || ""} onChange={handleChange}/>
            </label> */}
            {/* <button onClick={AddString}>AddString</button> */}
        </form>
    )
}

export default Wow;