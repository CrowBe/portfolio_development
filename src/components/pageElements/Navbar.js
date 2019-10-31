import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    const toggleMenu = () => {
        let menu = document.getElementById("contactMenu");
        console.log(menu)
        menu.classList.toggle("hidden");
    }
    return (
        <div className="NavBar" >
            <Link to="/web_portfolio">
                <div className='homeIcon' >
                </div>
            </Link>
            <Link to="/aboutme">
                <button id="navButton">About</button>
            </Link>
            <Link to="/projects">
                <button id="navButton">Projects</button>
            </Link>
            <div id="contactMenu" className="hidden">
                <div className="contactMeMenu">
                    <div>
                    <SocialIcon url="https://github.com/CrowBe" target='_blank' rel="noopener noreferrer"/>
                    </div>
                    <div>
                        <SocialIcon url="https://www.linkedin.com/in/benjamin-crow1991" target='_blank' rel="noopener noreferrer"/>            
                    </div>
                    <div>
                        <SocialIcon url="https://www.facebook.com/ben.crow.921" target='_blank' rel="noopener noreferrer"/>                
                    </div>
                    <div>
                        <SocialIcon url="https://twitter.com/BenCrow95406267" target='_blank' rel="noopener noreferrer"/>
                    </div>
                    <div>
                        <SocialIcon url="mailto:bennycrow91@gmail.com" target="_blank" rel="noopener noreferrer" />
                    </div>
                    {/* <div>
                        <span>Mobile</span>
                    </div> */}
                </div>
            </div>
            <div className="dropMenuButtonCard">
                <button id="contactMenuButton" onClick={toggleMenu}>Contact Me</button>
            </div>
            
            
        </div>
    );
}

export default NavBar;