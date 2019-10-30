import React, {Component} from 'react';

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
                    <div className="content previous hidden">

                        <div className="firstPortfolio">
                            <h2>Original portfolio website</h2>
                            <p>
                                The next assignment in our Diploma required us to build a portfolio website, using primarily HTML5 and CSS3.
                                The website is no longer live as I have built this to replace it but you can see the gitHub code for reference to how my develoment skills have progressed.
                        </p>
                            <a href="https://github.com/CrowBe/old_portfolio" target='blank'>Link to Github Code</a>
                        </div>
                        <div className="rubyApplication">
                            <h2>Music Suggestions App</h2>
                            <p>
                                During my Diploma, our first assignment asked us to create a Ruby terminal application (app) in pairs.
                                My partner Mike and I decided to make a program that would recommend a song based on your mood or an occasion.
                                The application asks for user input in a series of steps. Once it has narrowed the selection it generates a random selection from a database.
                            </p>
                            <a href="" target='blank'>Link to Github Code</a>
                        </div>
                        <div className="pythonGame">
                            <h2>Basic RPG Text Game</h2>
                            <p>
                                This is the first fully functional terminal app that I built.
                                It is written in Python utilizes classes, methods, functions, python packages, variables, user input and more.
                                I built it during an online course that I completed in 2017.
                            </p>
                            <div class="pygame">
                                <a href="https://trinket.io/embed/python3/c94822e364?runOption=run&start=result" target='blank'>Link To Interactive Shell</a>
                            </div>
                        </div>
                    </div>
                    <div className='content screenshots hidden'>
                    </div>
                    <div className='content current hidden'>
                        <div className="fullStackApp">
                            <h2>Business Workflow Application</h2>
                            <p>
                                This is the final assignment in the Diploma and was developed using Reactjs as a frontend.
                                Express and Node function were used to build the backend and MongoDB was used for database and cloud storage.
                                The application was deployed using Heroku and Amazon S3. As it was completed during my move to Tokyo the application is still in progress but you can see the current code on Github.
                            </p>
                            <a href="https://github.com/CrowBe/first_mern_app" target='blank'>Link to Github Code</a>
                        </div>
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