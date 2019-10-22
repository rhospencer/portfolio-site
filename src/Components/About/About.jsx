import React, {Component} from 'react'
import Slider from 'react-slick'
import picture1 from '../../assets/picture1.png'
import picture2 from '../../assets/picture2.JPG'

export default class About extends Component {
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
            <div id="about">
                <div className="empty-row"></div>
                <div className="about-section-holder">
                    <div className="about-section">
                        <div className="about-photos-holder">
                            <div className="about-photos">
                            <Slider {...settings}>
                                <div className="photo1"></div>
                                <div className="photo2"></div>
                                <div className="photo3"></div>
                                <div className="photo4"></div>
                            </Slider></div>
                        </div>
                        <div className="about-info-holder">

                        </div>
                    </div>

                    
                </div>
                
            </div>
        )
    }
}