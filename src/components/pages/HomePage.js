import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from '../../assets/images/myAvatar.png';
import pptc from '../../assets/images/pc-phone-tablet-clipart.png'
import mountainClimb from '../../assets/images/mountain-climb-clipart.png'

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage" >
                <div className="IntroCard">
                    <h1>Hi! I'm Ben Crow</h1>
                    <h3>Full Stack Web Developer</h3>
                    <span className="IntroSentence">
                        I recently developed a love for programming and completed a course in Web Development.
                    </span>
                    <span>
                        I’m currently looking for work and would love to hear from you!
                    </span> 
                </div>
                <div className="AvatarCard" >
                    <img className="Avatar" src={avatar} alt="cartoon image of man's face. Brown hair, blue eyes, light skin and a small smile."/>
                </div>
                <div className="ButtonCard">
                    <Link to="/aboutme">
                        <button className="AboutMeButton">Learn More About Me</button>
                    </Link>
                </div>
                <div className="cliparts">
                    <img className="pc-tablet-phone" src={pptc} alt="clipart of a pc, tablet and phone"/>
                    <img className="mountain-climb" src={mountainClimb} alt="clipart of man on top of mountain with helmet and rope" />

                </div>

            </div>
        );
    }
}

export default HomePage;