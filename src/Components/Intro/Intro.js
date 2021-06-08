import React from 'react'
import "./Intro.scss"
import {Parallax} from "react-parallax"
export default function Intro() {
    const img1="./Screenshot\ \(243\).png"
    return (
        <div className="Intro">
            <div className="greeting">
                <h2>Hello, I'm</h2>
            <h1>Bach Dung</h1>
            <p>Student of Hanoi University of science and technology</p>
            </div>
            
            
            <div className="info">
                <img width="100px" className="pic1" src="https://th.bing.com/th/id/OIP.CScBakEt5AWlntugoWE__gHaHa?w=170&h=176&c=7&o=5&dpr=1.25&pid=1.7"/>
                <h1>Bach Dung</h1>
                <h4>Study Computer Engineering</h4>
                <p className="address">at Hanoi University of Science and Technology</p>
                <p className="contact">Email: dungbachdang123@gmail.com</p>
                <p className="phone">phone: 0386948835</p>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}
