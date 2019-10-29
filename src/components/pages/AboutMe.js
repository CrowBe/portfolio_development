import React, {Component} from "react"
import { Link } from "react-router-dom";


class AboutMe extends Component {

    render() {


        const contentToggle = (event) => {
            let { target } = event
            let { id } =  target
            let buttons = document.querySelectorAll('.aboutToggleButton')
            buttons.forEach(element => {
                if (element.id !== id) {
                    element.classList.remove('toggled');
                }
                target.classList.toggle('toggled');
              })
            let pages = document.querySelectorAll('.about')
            let selectedPage = document.querySelector(`.${id}`)

            pages.forEach(element => {
                if (element !== selectedPage) {
                    element.classList.add('hidden')
                } else {
                    element.classList.toggle('hidden')
                }
                
            })

        };
        return (
            <div className="AboutMePage" >
                <div className="AboutMeColor">
                    {/* <img src=></img> */}
                </div>
                <div className="AboutMeContent">
                    <h2>Summary</h2>
                    <span>Broad description of my career, education skills</span>
                    <div className="about career hidden">
                        <h2>Career Page</h2>
                        <span></span>
                    </div>
                    <div className="about education hidden">
                        <h2>Education Page</h2>
                        <span></span>
                    </div>
                    <div className="about personal hidden">
                        <h2>Personal Page</h2>
                        <span></span>
                    </div>
                    <div className='AboutMeMenu' >
                        <button className="aboutToggleButton" id="career" onClick={contentToggle}>Career</button>
                        <button className="aboutToggleButton" id="education" onClick={contentToggle}>Education</button>
                        <button className="aboutToggleButton" id="personal" onClick={contentToggle}>Personal</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;