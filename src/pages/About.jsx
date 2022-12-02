import React from "react"
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default class About extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            birthdate: "21 November 1996",
            birthplace: "Jakarta",
            academic1: "SD Islam Al-Fajar(2003-2009)",
            academic2: "SMP Islam Al-Fajar(2009-2012)",
            academic3: "SMAN 11 Bekasi(2012-2015)",
            academic4: "Gunadarma University(2015-2019)",
            prodgpa: "Teknik Informatika, Kumulatif GPA : 3.04",
            phone:"0813-1758-9639",
            email:"diidnugroho@gmail.com",
            adress:"Villa Nusa Indah 2 Blok U13 No.23, Bojong Kulur, Gunung Putri, Bogor, 16969"
        }
        
    }

    render() {
        return(
            <div style={{marginLeft: "300px"}}>
                <h1>About Me</h1>
                <p>Birthdate : {this.state.birthdate}</p>
                <p>Birthplace : {this.state.birthplace}</p>
                <h2>Academic Background : </h2>
                <p>{this.state.academic1}</p>
                <p>{this.state.academic2}</p>
                <p>{this.state.academic3}</p>
                <p>{this.state.academic4}</p>
                <p style={{fontSize:"15px", marginTop:"-10px"}}>{this.state.prodgpa}</p>
                <h2>How to Contact Me :</h2>
                <p>Phone Number : {this.state.phone}</p>
                <p>Email : {this.state.email}</p>
                <p>Adress : {this.state.adress}</p>
                <h2>Github and Linkedin Account : </h2>
                <GitHubIcon style={{marginRight: 20}} fontSize="large" variant="contained" onClick={() => window.open("https://github.com/RenFrost")}>
                    Github
                </GitHubIcon>
                <LinkedInIcon fontSize="large" variant="contained" onClick={() => window.open("https://www.linkedin.com/in/muhammad-didi-nugroho-277ab219b/")}>
                    LinkedIn
                </LinkedInIcon>
                
            </div>
        )
    }
}

{/* <img src="./img/GitHub-Mark-Light-64px.png" alt="my image" onClick={this.state.github}/> */}