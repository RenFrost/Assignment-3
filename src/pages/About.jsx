import React from "react"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

function Abouts(props) { 
    
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.birthdate}</p>
            <p>{props.birthplace}</p>
            <p>{props.github}</p>
            <p>{props.linkedin}</p>
            <p>{props.academic}</p>
        </div>
    )
}



export default class About extends React.Component {

    render() {
        return(
            <div>
                <h1>About Me</h1>
                <h2><Abouts name="Muhammad Didi Nugroho" /></h2>
                <Abouts birthdate="21 November 1996"/>
                <Abouts birthplace="Jakarta"/>
                <h2>Academic Background : </h2>
                <Abouts academic="SD Islam Al-Fajar(2003-2009)"/>
                <Abouts academic="Gunadarma University(2009-2012)"/>
                <Abouts academic="Gunadarma University(2012-2015)"/>
                <Abouts academic="Gunadarma University(2015-2019)"/>
                <p style={{fontSize: "12px", marginBottom:"3%"}}>Teknik Informatika, Kumulatif GPA : 3.04</p>
                <h2>Github and Linkedin Account: </h2>
                <Button variant="contained" onClick={() => {
                    
                }}>
                    Github
                </Button>
                
            </div>
        )
    }
}

{/* <img src="./img/GitHub-Mark-Light-64px.png" alt="my image" onClick={this.state.github}/> */}