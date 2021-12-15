import React from "react";

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {show : false};
    }

    delHandler = () => {
        this.setState({show: false});
    };

    render() {
        let myheader;
        if(this.state.show) {
            myheader = <Child />;
        }
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHandler}>Delete Handler</button>
            </div>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.")
    }

    render() {
        return (<h1>Hello World !</h1>)
    }
}

export default Container;