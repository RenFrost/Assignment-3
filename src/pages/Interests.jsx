import React from "react"

export default class Interest extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            language: "English and Japanese",
            hobby1: "Developing Android Application",
            hobby2: "Reading",
            hobby3: "Listening to Music"
        }
    }


    render() {
        return(
            <div>
                <h1>Interest</h1>
                <p>Studying Foreign Language: </p>
                <p>{this.state.language}</p>
                <p>{this.state.hobby1}</p>
                <p>{this.state.hobby2}</p>
                <p>{this.state.hobby3}</p>
            </div>
        )
    }
}