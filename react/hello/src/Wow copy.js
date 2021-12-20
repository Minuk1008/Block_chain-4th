import React, {useState} from "react";

function Wow() {
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Your Name: 
                <input type="text" name="username" value={input.username || ""} onChange={handleChange}/>
            </label>
            <label>
                <input type="number" name="age" value={input.age || ""} onChange={handleChange}/>
            </label>
            <input type="submit"/>
        </form>
    )
}

export default Wow;