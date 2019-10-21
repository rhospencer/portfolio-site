import React, {Component} from 'react'

export default class Nav extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="nav">
                <nav>
                    <div className="name">
                    {/* <h4>Spencer Rhoton</h4>&nbsp;<h6>Web Developer</h6> */}
                    </div>
                    <div className="nav-items">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    </div>
                </nav>
            </div>
        )
        
    }
}