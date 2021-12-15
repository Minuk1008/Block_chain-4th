import React from "react";

class Headercomp extends React.Component { //건담(상위값)을 컴포넌트(하위값)에 상속해줌 
    constructor(props) { //props가 property
        super(props);
        this.state = {headertitle:"This is My page of header"};
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {headertitle: props.newTitle}
        // state.headertitle = props.newTitle;
        // return (state.headertitle);
    // }

    // changeHeaderTitle = () => {
    //     this.setState({headertitle: "changeHeaderTitle Title !"})
    // };

    // shouldComponentUpdate() {
    //     return true;
    // };

    componentDidMount() {
        setTimeout(()=> {
            this.setState({headertitle: "componentDidMount title !"})
        }, 5000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = 
        "Before update title is " + prevState.headertitle + "Before update newTitle is " + prevProps.newTitle;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = 
        "The update title is " + this.state.headertitle;
    }

//     render() {
//         // return (<h1>{this.state.headertitle}</h1>);
//         return (
//             <div>
//                 <h1>{this.state.headertitle}</h1>
//                 <button type="button" onClick={this.changeHeaderTitle}>Change Title</button>
//             </div>
//         );
//     }
// }
    render() {
        return (
            <div>
                <h1>{this.state.headertitle}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

export default Headercomp;