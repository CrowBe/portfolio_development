import React, {Component} from 'react';
import PortfolioContent from '../pageElements/project/PortfolioContent';
import PreviousContent from '../pageElements/project/PreviousContent';
import ScreenshotContent from '../pageElements/project/ScreenshotContent';
import CurrentContent from '../pageElements/project/CurrentContent';

class ProjectsPage extends Component {

    render() {
        const contentToggle = (event) => {
            let { target } = event
            let { id } =  target
            let buttons = document.querySelectorAll('.contentToggleButton')
            console.log(buttons)
            buttons.forEach(element => {
                if (element.id !== id) {
                    element.classList.remove('toggled');
                }
                target.classList.toggle('toggled');
              })
            let pages = document.querySelectorAll('.content')
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
            <div className="contentPage" >
                <div className="contentColor" id ="projectsColor">
                </div>
                <div className="contentSection">
                    <PortfolioContent />
                    <div className="content previous hidden">
                        <PreviousContent/>
                    </div>
                    <div className='content screenshots hidden'>
                        <ScreenshotContent />
                    </div>
                    <div className='content current hidden'>
                        <CurrentContent />
                    </div>
                    <div className='contentMenu' id="projectsMenu">
                        <button className="contentToggleButton" id="previous" onClick={contentToggle}>Previous</button>
                        <button className="contentToggleButton" id="screenshots" onClick={contentToggle}>Screenshots</button>
                        <button className="contentToggleButton" id="current" onClick={contentToggle}>Current</button>
                    </div>

                </div>
                <div className="stackImages">
                    <div class="javaScriptImg"></div>
                    <div class="mongoDBImg"></div>
                    <div class="rubyImg"></div>
                    <div class="htmlImg"></div>
                    <div class="cssImg"></div>
                    <div class="pythonImg"></div>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;