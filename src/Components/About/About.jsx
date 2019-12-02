import React, {Component} from 'react'
import Slider from 'react-slick'
import photo from '../../assets/picture1.jpg'

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
                        <div className="single-photo">
                            <img src={photo} alt="Photo of Spencer"/>
                        </div>
                        <div className="about-info-holder">
                            <h1>It's great to meet you!</h1>
                            <p>My name is Spencer Rhoton and I am a Full Stack Web Developer based
                                out of St. George, Utah. My passion for coding developed during my time
                                at DevMountain, a coding boot camp located in Lehi, Utah. I have built
                                several projects using React, Express, PostgreSql and other tools. I 
                                look forward to continuing my knowledge and learning new tools and technologies.
                                During my free time I love to ski, run marathons, and spend time with my wife and puppy. 
                                Feel free to contact me through my contact page. Thanks for checking out my portfolio site!
                            </p>
                        </div>
                    </div>

                    
                </div>
                
            </div>
        )
    }
}