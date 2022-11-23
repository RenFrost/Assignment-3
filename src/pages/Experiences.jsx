import React from "react";


export default class Experiences extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            experiences: "1. Halal Unit PT. Sucofindo(Nov 2021 ~ June 2022)",
            position: "Position: Helpdesk",
            jobdesk: "Jobdesk: Handling important documents for Halal Certification"
        }
    }

    render() {
        return(
            <div>
                <h1>Work Experiences</h1>
                <h2 style={{fontSize: "20px"}}>{this.state.experiences}</h2>
                <p style={{fontSize: "16px", marginLeft:"3%"}}>{this.state.position}</p>
                <p style={{fontSize: "16px", marginLeft:"3%"}}>{this.state.jobdesk}</p>
            </div>
        )
    }
}