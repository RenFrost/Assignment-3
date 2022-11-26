import { Component } from "react"

export default class Ccourses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gundarcourses1: "Fundamental Web Programming",
            gundarcourses2: "Fundamental Desktop Programming",
            gundarcourses3: "Java Programming for Beginner",
            gundarcourses4: "Java For Intermediate",
            gundarcourses5: "Java Programming Language Fundamentals",
            toefl: "TOEFL ITP (Total Score : 560)"
        }
    }

    render() {
        return(
            <div>
                <h1>Certificate & Courses</h1>
                <p>{this.state.gundarcourses1}</p>
                <p>{this.state.gundarcourses2}</p>
                <p>{this.state.gundarcourses3}</p>
                <p>{this.state.gundarcourses4}</p>
                <p>{this.state.gundarcourses5}</p>
                <p>{this.state.toefl}</p>
            </div>
        )
    }
}