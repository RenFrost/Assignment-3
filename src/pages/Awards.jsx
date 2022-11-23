import React from "react"

export default class Awards extends React.Component {
    constructor(props){
        super(props) 

        this.state = {
            texts: "Unfortunately there's no award yet"
        }
    }

    render() {
        return(
            <div>
                <h1>Awards</h1>
                <p>{this.state.texts}</p>
            </div>
        )
    }
}