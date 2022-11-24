import React from "react";

export default class Skills extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            proglanguage1: "Java and Kotlin (Android)",
            proglanguage2: "React JS",
            language1:"Indonesian(Fluent)",
            language2:"English(Proficient)",
            language3:"Japanese(Beginner)",
        }
    }

    render() {
        return(
            <div>
                <h1>Skills</h1>
                <h2>Programming Language : </h2>
                <p>{this.state.proglanguage1}</p>
                <p>{this.state.proglanguage2}</p>
                <h2>Language : </h2>
                <p>{this.state.language1}</p>
                <p>{this.state.language2}</p>
                <p>{this.state.language3}</p>
            </div>
        )
    }
}