import React, {Component} from 'react';
import { Link } from "react-router-dom";
import EducationContent from '../pageElements/about/EducationContent';
import CareerContent from '../pageElements/about/CareerContent';
import SummaryContent from '../pageElements/about/SummaryContent';
import SkillsContent from '../pageElements/about/SkillsContent';
import coffeeCup from './../../assets/images/coffee-cup.png';
import bookClipart from './../../assets/images/book-clipart.png';
import mouseClipart from './../../assets/images/white-mouse-clipart.png';


class AboutMePage extends Component {

    render() {
        const contentToggle = (event) => {
            let { target } = event;
            let { id } =  target;
            let buttons = document.querySelectorAll('.contentToggleButton');
            buttons.forEach(element => {
                if (element.id !== id) {
                    element.classList.remove('toggled');
                }
                target.classList.toggle('toggled');
              })
            let pages = document.querySelectorAll('.content');
            let selectedPage = document.querySelector(`.${id}`);

            pages.forEach(element => {
                if (element !== selectedPage) {
                    element.classList.add('hidden')
                } else {
                    element.classList.toggle('hidden')
                }
            });
        };
        return (
            <div className="contentPage" >
                <div className="contentColor">
                    <div className='coffeeClipart'>
                        <img src={coffeeCup} alt='Coffee Cup'/>
                    </div>
                    <div className='bookClipart'>
                        <img src={bookClipart} alt='book'/>
                    </div>
                    <div className='mouseClipart'>
                        <img src={mouseClipart} alt='computer mouse'/>
                    </div>

                </div>
                <div className="contentSection">
                    
                    <div className="contentSummary">
                        <SummaryContent/>
                    </div>
                    <div className="content career hidden">
                        <CareerContent/>
                    </div>
                    <div className="content education hidden">
                        <EducationContent/>
                    </div>
                    <div className="content skills hidden">
                        <SkillsContent/>
                    </div>
                    <div className='contentMenu' >
                        <button className="contentToggleButton" id="career" onClick={contentToggle}>Career</button>
                        <button className="contentToggleButton" id="education" onClick={contentToggle}>Education</button>
                        <button className="contentToggleButton" id="skills" onClick={contentToggle}>Skills</button>
                    </div>

                </div>
                <div className="ButtonCard" id='projectsButtonCard'>
                        <Link to="/projects">
                            <button className="linkButton" id='projectsLinkButton'>See My Projects</button>
                        </Link>
                </div>
            </div>
        );
    }
}

export default AboutMePage;