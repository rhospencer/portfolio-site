import React, {Component} from 'react'

export default class Contact extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div id="contact">
                <div className="empty-row"></div>
                <div className="contact-section-holder">
                    <div className="contact-section">
                        <div className="contact-title">
                            <h1>Let's Talk!</h1>
                        </div>
                        <div className="contact-info">
                            <div className="contact-item">
                                <i class="fas fa-envelope-open-text fa-3x"></i>
                                <a href="mailto:rhotonspencer@gmail.com"><h4>rhotonspencer@gmail.com</h4></a>
                            </div>
                            <div className="contact-item">
                                <i class="fas fa-phone-alt fa-3x"></i>
                                <a href="tel:435-359-6400"><h4>(435) 359-6400</h4></a>
                            </div>
                            <div className="contact-item">
                                <i class="fab fa-linkedin-in fa-3x"></i>
                                <a href="https://www.linkedin.com/in/spencer-rhoton-48679b195/"><h4>https://www.linkedin.com/in/spencer-rhoton-48679b195/</h4></a>
                            </div>
                            <div className="contact-item">
                                <i class="fab fa-github fa-3x"></i>
                                <a href="https://github.com/rhospencer"><h4>https://github.com/rhospencer</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}