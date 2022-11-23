import React from "react";

function SkillsList(props) { 
    
    return(
            <div>
                {props.skilllist}
                {props.proglanguage}
                {props.language}
            </div>
    )
 }

export default class Skills extends React.Component {

    render() {
        return(
            <div>
                <h1>Skills</h1>
                <h2><SkillsList proglanguage="Programming Language : "/></h2>
                <span style={{fontSize: "18px"}}><SkillsList skilllist="Java and Kotlin (Android Apps)"/></span>
                <span style={{fontSize: "18px"}}><SkillsList skilllist="React Js"/></span>
                <h2><SkillsList language="Language : "/></h2>
                <span style={{fontSize: "18px"}}><SkillsList skilllist="Indonesian(Fluent)"/></span>
                <span style={{fontSize: "18px"}}><SkillsList skilllist="English(Proficient)"/></span>
                <span style={{fontSize: "18px"}}><SkillsList skilllist="Japanese(Beginner)"/></span>
            </div>
        )
    }
}