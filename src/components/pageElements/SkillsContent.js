import React from 'react';

const SkillsContent = () => {
    return (
        <div className="skillsText">
            <h2>Skills</h2>
            <h3>Technical Competencies</h3>
            <span>For an idea of my competency with the following, see the projects page linked below and in the Navbar.</span>
            <div className="skillsList">
            <ul>
                <li>
                    <h4>Programming Languages</h4>
                    <ol>
                        <li>Javascript</li>
                        <li>Ruby</li>
                        <li>Python</li>
                    </ol>
                </li>
                <li>
                    <h4>Frameworks and Libraries</h4>
                    <ol>
                        <li>Reactjs</li>
                        <li>Express/Node js</li>
                        <li>Rails</li>
                    </ol>
                </li>
                <li>
                    <h4>Other development languages</h4>
                    <ol>
                        <li>HTML5 Markup</li>
                        <li>CSS3 with SCSS</li>
                        <li>Markdown for README files</li>
                    </ol>
                </li>
                <li>
                    <h4>Project and Design Tools</h4>
                    <ol>
                        <li>Github - Source Control</li>
                        <li>Balsamiq - Wireframing</li>
                        <li>Trello - Task Management</li>
                    </ol>
                </li>
                <li>
                    <h4>Third Party Applications</h4>
                    <ol>
                        <li>MongoDB - Local and Cloud Database</li>
                        <li>Google Cloud Platform</li>
                        <li>Amazon Web Services</li>
                        <li>Heroku</li>
                    </ol>
                </li>
            </ul>
            </div>
            <span>
                Disclaimer: I have a working level of competency in the above.
                At minimum, I could work with them in a development environment given time to review and technical supervision.
            </span>
        </div>
    );
};

export default SkillsContent;