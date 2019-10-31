import React from 'react';

const PreviousContent = () => {
    return (
        <div className="previousContent">
            <h2>Early Projects</h2>
            <div className="railsMarketplace">
                <h3>Rails Two-sided Marketplace</h3>
                <p>
                    As part of our portfolio development. We also built a two-sided marketplace using Ruby on Rails.
                    The application includes authentication/authorisation, a search function, a payment system and Amazon Web Storage for user image uploads.
                </p>
                <a href="https://github.com/CrowBe/old_portfolio" target='blank'><button>GitHub Repo</button></a>
                <a href="http://hobbybuddies.herokuapp.com/" target='blank'><button>Live App</button></a> 
            </div>
            <div className="firstPortfolio">
                <h3>Original portfolio website</h3>
                <p>
                    The next assignment in our Diploma required us to build a portfolio website, using primarily HTML5 and CSS3.
                    The website is no longer live as I have built this to replace it but you can see the gitHub code for reference to how my develoment skills have progressed.
                </p>
                <a href="https://github.com/CrowBe/old_portfolio" target='blank'><button>GitHub Repo</button></a>
            </div>
            <div className="rubyApplication">
                <h3>Music Suggestions App</h3>
                <p>
                    During my Diploma, our first assignment asked us to create a Ruby terminal application (app) in pairs.
                    My partner Mike and I decided to make a program that would recommend a song based on your mood or an occasion.
                    The application asks for user input in a series of steps. Once it has narrowed the selection it generates a random selection from a database.
                </p>
                <button>GitHub Repo</button>
            </div>
            <div className="pythonGame">
                <h3>Basic RPG Text Game</h3>
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
    );
};

export default PreviousContent;