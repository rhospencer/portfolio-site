import React, {Component} from 'react'

export default class Skills extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div id="skills">
                <div className="empty-row"></div>
                <div className="skills-row">
                    <div className="skills-box">
                        <i class="devicon-git-plain colored"></i>
                        <h2>Git</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-javascript-plain colored"></i>
                        <h2>JavaScript</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-python-plain colored"></i>
                        <h2>Python</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-sass-original colored"></i>
                        <h2>Sass</h2>
                    </div>
                </div>
                <div className="skills-row">
                    <div className="skills-box">
                        <i class="devicon-mysql-plain colored"></i>
                        <h2>MySQL</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-html5-plain colored"></i>
                        <h2>HTML5</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-react-original colored"></i>
                        <h2>React</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-css3-plain colored"></i>
                        <h2>CSS3</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-postgresql-plain colored"></i>
                        <h2>PostgreSQL</h2>
                    </div>
                </div>
                <div className="skills-row">
                    <div className="skills-box">
                        <i class="devicon-wordpress-plain"></i>
                        <h2>Wordpress</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-mongodb-plain colored"></i>
                        <h2>mongoDB</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-nodejs-plain colored"></i>
                        <h2>Node.js</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-express-original"></i>
                        <h2>Express</h2>
                    </div>
                    <div className="skills-box">
                        <i class="devicon-amazonwebservices-original colored"></i>
                        <h2>AWS</h2>
                    </div>
                </div>
            </div>
        )
    }
}