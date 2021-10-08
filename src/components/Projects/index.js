import React from 'react'; 
import theBotanist from '../../assets/the-botanist-preview.png';
import geoRandomizer from '../../assets/geographic-randomizer-preview.png';
import huntForHelpers from '../../assets/hunt-for-helpers-preview.png';

function Projects() {
    const projects = [
        {
            title: "The Botanist",
            description: "The Botanist is a full-stack e-commerce site, that simulates a complete shopping experience and checkout process. Users may create an account to make purchases and save the details to review later on in their own account dashboard.",
            icons: "",
            technologies: [
                'React',
                'Tailwind CSS',
                'GraphQL',
                'MongoDB',
                'Express.js',
                'Node',
                'OAuth',
                'Stripe'
            ],
            img: {theBotanist},
            repo: "https://github.com/jayMaverick/The-Botanist",
            deployed: "https://the-botanist-project.herokuapp.com/"
        },
        {
            title: "Hunt for Helpers",
            description: "Hunt for Helpers is a social media site that performs all the essential functions to make community service events more readily known and to encourage users to get more involved in their respective communities. Users will be able to create, edit, or cancel any events that they have organized, as well as join events that have already been created.",
            icons: "",
            technologies: [
                'Handlebars.js',
                'Bootstrap CSS',
                'Sequelize',
                'Express.js',
                'Node'
            ],
            repo: "https://github.com/kdombrosky/hunt-for-helpers",
            deployed: ""
        },
        {
            title: "Geographic Randomizer",
            description: "The Geographic Randomizer was made for users who want to utilize a bit of random decision making to their day. Users may grant their browser access to their location, and then choosing how far they would like to drive, and to what type of destination (restaurants or points of interest). From there the user can see the travel time to the destination, and save the place to their local storage.",
            icons: "",
            technologies: [
                'HTML5',
                'Materialize CSS',
                'JavaScript',
                'jQuery',
                'Google Maps API'
            ],
            repo: "https://github.com/Aswebilius/Travel-Mate-Geographic-Randomizer",
            deployed: "https://aswebilius.github.io/Travel-Mate-Geographic-Randomizer/"
        }
    ]

    return (
    <div className="container">
        {/* Heading */}
        <div className="row align-items-center">
            <div className="col-8 "></div>
            <div className="col-4">
                <div className="position-relative">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob-container">
                    <path fill="#D0E2FF" d="M51.9,-22.5C65.2,-6.8,72.7,19.8,63.1,34.2C53.5,48.6,26.7,50.8,0.9,50.3C-24.9,49.7,-49.8,46.4,-61,31.1C-72.2,15.8,-69.7,-11.5,-57.3,-26.7C-44.8,-41.9,-22.4,-45,-1.6,-44C19.2,-43.1,38.5,-38.2,51.9,-22.5Z" transform="translate(100 100)" />
                    </svg>
                    
                    <h1 className="overlay-container display-6"><strong>My Projects</strong></h1>
                </div>
            </div>
        </div>

        {/* Projects */}
        {/* The Botanist */}
        <div className="row space-bottom">
            <div className="col-7">
                <img src={theBotanist} alt="The Botanist Preview" className="contained-img shadow-sm" />
            </div>

            <div className="col-5 bg-light card shadow-sm">
                <div className="card-body ">
                    <h2 className="card-title d-flex justify-content-end py-3 px-2">{projects[0].title}</h2>
                    <p className="lead d-flex justify-content-end">{projects[0].description}</p>
                    <p className="card-subtitle text-muted"><strong>Made with:</strong> React, Tailwind CSS, GraphQL, MongoDB, Express.js, Node, OAuth, Stripe </p>
                    <div className="d-flex justify-content-end"> 
                        <button type="button" class="btn btn-dark mx-1"><a href={projects[0].repo} className="text-light">GitHub Repo</a></button>
                        <button type="button" class="btn btn-dark mx-1"><a href={projects[0].deployed} className="text-light ">Heroku Deployment</a></button>
                    </div>
                    
                </div>
            </div>
        </div>


        {/* Hunt for Helpers */}
        <div className="row space-bottom">
            <div className="col-5 bg-dark shadow-sm  text-white card">
                <div className="card-body">
                    <h2 className="card-title py-3 px-1">{projects[1].title}</h2>
                    <p className="lead">{projects[1].description}</p>
                    <p className="card-subtitle text-light"><strong>Made with:</strong> Handlebars.js, Bootstrap CSS, SQL, Sequelize, Express.js, Node </p>
                    <div className="d-flex justify-content-end"> 
                        <button type="button" class="btn btn-light mx-1"><a href={projects[1].repo} className="px-1 text-dark">GitHub Repo</a></button>
                        <button type="button" class="btn btn-light mx-1"><a href={projects[1].deployed} className="px-1 text-dark">Heroku Deployment</a></button>
                    </div>
                </div>
            </div>

            <div className="col-7">
                <img src={huntForHelpers} alt="The Botanist Preview" className="contained-img shadow-sm" />
            </div>
        </div>


        {/* Geographic Randomizer */}
        <div className="row">
            <div className="col-7">
                <img src={geoRandomizer} alt="The Botanist Preview" className="contained-img shadow-sm" />
            </div>

            <div className="col-5 bg-light card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title d-flex justify-content-end py-3 px-2">{projects[2].title}</h2>
                    <p className="lead d-flex justify-content-end">{projects[2].description}</p>
                    <p className="card-subtitle text-muted"><strong>Made with:</strong> HTML5, Materialize CSS, JavaScript, jQuery, Google Maps API </p>
                    <div className="d-flex justify-content-end"> 
                        <button type="button" class="btn btn-dark mx-1"><a href={projects[2].repo} className="text-light">GitHub Repo</a></button>
                        <button type="button" class="btn btn-dark mx-1"><a href={projects[2].deployed} className="text-light ">GitHub Pages</a></button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Projects;