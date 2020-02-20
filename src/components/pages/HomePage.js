import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from '../../assets/images/myAvatar.png';
import pptc from '../../assets/images/pc-phone-tablet-clipart.png'
import mountainClimb from '../../assets/images/mountain-climb-clipart.png'
import soccerball from './../../assets/images/soccerball-clipart.png'

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage" >
                <div className="IntroCard">
                    <h1>Hi! I'm Ben Crow</h1>
                    <h3>Full Stack Web Developer</h3>
                    <span>
                        As a trained outdoor guide, avid reader and keen soccer player
                    </span>
                    <span>
                        I can bring problem solving, teamwork and imagination to any team.
                    </span>
                    <span>
                        I'm currently looking for work so please feel free to contact me!
                    </span>
                </div>
                <div className="AvatarCard" >
                    <img className="Avatar" src={avatar} alt="cartoon of man's face. Brown hair, blue eyes, light skin and a small smile."/>
                </div>
                <div className="clipartsHome">
                    <img id="pc-tablet-phone" src={pptc} alt="pc, tablet and phone"/>
                    <img id="soccerball" src={soccerball} alt="soccerball"/>
                    <img id="mountain-climb" src={mountainClimb} alt="man on top of mountain with helmet and rope" />
                </div>
                <div className="ButtonCard">
                    <Link to="/aboutme">
                        <button className="linkButton">Learn More About Me</button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default HomePage;