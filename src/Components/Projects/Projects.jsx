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
                <h1>The Route Runner</h1>
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
                </div>
                <div className="group-holder"></div></div>
            </div>
        )
    }
}