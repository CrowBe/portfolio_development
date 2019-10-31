import React from 'react';

const CurrentContent = () => {
    return (
        <div className="currentContent">
            <div className="fullStackApp">
                <h2>Business Workflow Application</h2>
                <p>
                    This is the final assignment in the Diploma and was developed using Reactjs as a frontend.
                    Express and Node function were used to build the backend and MongoDB was used for database and cloud storage.
                    The application was deployed using Heroku and Amazon S3. As it was completed during my move to Tokyo the application is still in progress but you can see the current code on Github.
                </p>
                <a href="https://github.com/CrowBe/first_mern_app" target='blank'><button>GitHub Repo</button></a>
            </div>
        </div>
    );
};

export default CurrentContent;