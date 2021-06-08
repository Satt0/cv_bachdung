import React, {useState} from 'react'
import './Nav.scss'
import ScrollIntoView from 'react-scroll-into-view'
export default function Nav() {
    const[open, setOpen] = useState(false)
    return (
        <div className="header">
            <div className="a">
            <ScrollIntoView selector="#about"><h1>About</h1></ScrollIntoView>
            <ScrollIntoView selector="#education"><h1>Education&Experience</h1></ScrollIntoView>
            <ScrollIntoView selector="#skill"><h1>Skill&Languages</h1></ScrollIntoView>
            <ScrollIntoView selector="#award"><h1>Awards&Interests</h1></ScrollIntoView>
            </div>
            <div className='a' style={{transform: open ? "translateX(0px)" : "translateX(-2000px)"}}>
            <i onClick={() => setOpen(!open)} class="fas fa-times"></i>
            <ScrollIntoView selector="#about"><h1>About</h1></ScrollIntoView>
            <ScrollIntoView selector="#education"><h1>Education&Experience</h1></ScrollIntoView>
            <ScrollIntoView selector="#skill"><h1>Skill&Languages</h1></ScrollIntoView>
            <ScrollIntoView selector="#award"><h1>Awards&Interests</h1></ScrollIntoView>
            </div>
            <i onClick={() => setOpen(!open)} class="fas fa-bars burger"></i>
        </div>
    )
}
