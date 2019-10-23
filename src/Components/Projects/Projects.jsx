import React, {Component} from 'react'
import Slider from 'react-slick'

export default class Projects extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            cssEase: 'linear',
            autoplaySpeed: 5000
        }
        return (
            <div id="projects">
                <div className="empty-row"></div>
                    <div className="projects-holder"><div className="personal-holder">
                        <a href="https://www.therouterunner.com"><h1>The Route Runner</h1></a>
                        <div className="project-photos-holder">
                            <div className="project-photos">
                                <Slider {...settings}>
                                    <div className="personal1"></div>
                                    <div className="personal2"></div>
                                    <div className="personal3"></div>
                                    <div className="personal4"></div>
                                </Slider>
                            </div>
                        </div>
                        <div className="list-holder">
                            <ul>
                                <li>I created this project to help runners find routes based on location and distance and incorporate those routes in their training plan.</li>
                                <li>Anyone can visit the site and search for routes based on city and distance.</li>
                                <li>Registered users and add their own routes as well as add routes other users have created into their personal collection of routes.</li>
                                <li>Users can create a weekly training plan and attach routes from their collection to specific days.</li>
                            </ul>
                        </div>
                    </div>
                <div className="group-holder"></div></div>
            </div>
        )
    }
}