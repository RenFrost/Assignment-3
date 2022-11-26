import React from "react"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'


export default class About extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Muhammad Didi Nugroho",
            birthdate: "21 November 1996",
            birthplace: "Jakarta",
            academic1: "SD Islam Al-Fajar(2003-2009)",
            academic2: "SMP Islam Al-Fajar(2009-2012)",
            academic3: "SMAN 11 Bekasi(2009-2012)",
            academic4: "Gunadarma University(2012-2015)",
            prodgpa: "Teknik Informatika, Kumulatif GPA : 3.04"
        }
        
    }

    render() {
        return(
            <div>
                <h1>About Me</h1>
                <h2>{this.state.name}</h2>
                <p>Birthdate : {this.state.birthdate}</p>
                <p>Birthplace : {this.state.birthplace}</p>
                <h2>Academic Background : </h2>
                <p>{this.state.academic1}</p>
                <p>{this.state.academic2}</p>
                <p>{this.state.academic3}</p>
                <p>{this.state.academic4}</p>
                <h2>Github and Linkedin Account : </h2>
                <Button variant="contained" onClick={() => window.open("https://github.com/RenFrost")}>
                    Github
                </Button>
                <Button variant="contained" onClick={() => window.open("https://www.linkedin.com/in/muhammad-didi-nugroho-277ab219b/")}>
                    LinkedIn
                </Button>
                
            </div>
        )
    }
}

{/* <img src="./img/GitHub-Mark-Light-64px.png" alt="my image" onClick={this.state.github}/> */}