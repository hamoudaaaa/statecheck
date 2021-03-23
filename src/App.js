//import logo from "./logo.svg";
import React, { Component } from "react";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "Ahmed ben miled ",
            bio: "Welcome to my bio",
            profession: "student",
            time: 0,
            show: false,
        };
    }
    show = () => {
        this.setState({
            show: !this.state.show,
        });
    };
    componentDidMount() {
        setInterval(() => {
            this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
    }
    render() {
        return (
            <div>
                <button onClick={this.show}>
                    {this.state.show ? "show" : "mafamech"}
                </button>
                {this.state.show ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignContent: "center",
                            flexWrap: "wrap-reverse",
                            fontStyle: "bold",
                            color: "blue",
                        }}
                    >
                        <h1>fullname: {this.state.fullname}</h1>
                        <h1>bio :{this.state.bio}</h1>
                        <h1>profession:{this.state.profession}</h1>
                        <h1> time:{this.state.time}</h1>
                    </div>
                ) : null}
            </div>
        );
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         Person: {
    //             fullName: "Hafdhi Imen",
    //             bio: "this is a biography",

    //             profession: "IT engineer",
    //         },
    //         time: 0,
    //         show: true,
    //     };
    // }
    // handleClick = () => {
    //     this.setState((state) => ({ show: !this.state.show }));
    // };
    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState((prevState) => ({ time: prevState.time + 1 }));
    //     }, 1000);
    // }

    // render() {
    //     return (
    //         <div className="App">
    //             <br />
    //             <button onClick={this.handleClick}>
    //                 {this.state.show ? "Show" : "Hide"}
    //             </button>
    //             {this.state.show ? (
    //                 ""
    //             ) : (
    //                 <div>
    //                     <br />
    //                     <img
    //                         src={this.state.Person.imgSrc}
    //                         alt="profil_pic"
    //                         style={{
    //                             fontStyle: "bold",
    //                             color: "aqua",
    //                             width: "200px",
    //                             height: "200px",
    //                             borderRadius: "20px",
    //                         }}
    //                     />
    //                     <br />
    //                     <h2
    //                         style={{
    //                             fontSize: "large",
    //                             fontStyle: "bold",
    //                             color: "teal",
    //                         }}
    //                     >
    //                         Full name: {this.state.Person.fullName}
    //                     </h2>
    //                     <h3 style={{ fontStyle: "bold", color: "purple" }}>
    //                         Biography: {this.state.Person.bio}
    //                     </h3>
    //                     <h3 style={{ fontStyle: "bold", color: "blue" }}>
    //                         Profession: {this.state.Person.profession}
    //                     </h3>
    //                     <h3>Timing:{this.state.time}</h3>
    //                 </div>
    //             )}
    //         </div>
    //     );
    // }
}

export default App;
