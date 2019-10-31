import React from 'react';

const PortfolioContent = () => {
    return (
        <div className="portfolioContent">
            <div className="fullStackApp">
                <h2>This Portfolio Project</h2>
                <p>
                    The website is built entirely in React and hosted using GitHub's Pages service. 
                    While it is not necessarily the ideal framework for such a project,
                    much of the functionality being redundant, 
                    it has functioned well as a way for me to refresh my portfolio and my confidence developing in React simultaneously.
                </p>
                <p>
                    Check out the GitHub repo to see how I structured the code and 
                    if you have any feedback I'd be more than happy to hear from you! 
                    Get in touch using any of the Contact Me menu options.
                </p>
                <a href="https://github.com/CrowBe/first_mern_app" target='blank'><button>GitHub Repo</button></a>
            </div>
        </div>
    );
};

export default PortfolioContent;