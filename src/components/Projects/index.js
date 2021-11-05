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
            deployed: "https://sheltered-savannah-38970.herokuapp.com/"
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
    <section className="container" id="projects">
        {/* Heading */}
        <div>
            <h2 className="text-center pb-4 display-4">My Projects</h2>
        </div>

        {/* Projects */}
        {/* The Botanist */}
        <div className="row space-bottom">
            <div className="col-lg-7 col-sm-12 ">
                <img src={theBotanist} alt="The Botanist Preview" className="img-fluid shadow-sm rounded" />
            </div>

            <div className="col-lg-5 col-sm-12  bg-light card ">
                <div className="card-body">
                    <h2 className="card-title d-flex justify-content-end py-3 px-2">{projects[0].title}</h2>
                    <p className="lead d-flex justify-content-end">{projects[0].description}</p>
                    <p className="card-subtitle text-muted"><strong>Made with:</strong> React, Tailwind CSS, GraphQL, MongoDB, Express.js, OAuth, Stripe </p>
                    <div className="d-flex justify-content-end"> 
                        <button type="button" className="btn btn-dark mx-1"><a href={projects[0].repo} className="text-light" target="_blank" rel="noreferrer">GitHub Repo</a></button>
                        <button type="button" className="btn btn-dark mx-1"><a href={projects[0].deployed} className="text-light" target="_blank" rel="noreferrer">Heroku Deployment</a></button>
                    </div>
                    
                </div>
            </div>
        </div>


        {/* Hunt for Helpers */}
        <div className="row space-bottom">
            <div className="col-lg-5 col-sm-12 bg-dark shadow-sm  text-white card">
                <div className="card-body">
                    <h2 className="card-title py-3 px-1">{projects[1].title}</h2>
                    <p className="lead">{projects[1].description}</p>
                    <p className="card-subtitle text-light"><strong>Made with:</strong> Handlebars.js, Bootstrap CSS, SQL, Sequelize, Express.js </p>
                    <div className="d-flex justify-content-end"> 
                        <button type="button" className="btn btn-light mx-1"><a href={projects[1].repo} className="px-1 text-dark" target="_blank" rel="noreferrer">GitHub Repo</a></button>
                        <button type="button" className="btn btn-light mx-1"><a href={projects[1].deployed} className="px-1 text-dark" target="_blank" rel="noreferrer">Heroku Deployment</a></button>
                    </div>
                </div>
            </div>

            <div className="col-lg-7 col-sm-12">
                <img src={huntForHelpers} alt="Hunt for Helpers Preview" className="rounded img-fluid shadow-sm" />
            </div>
        </div>


        {/* Geographic Randomizer */}
        <div className="row">
            <div className="col-lg-7 col-sm-12">
                <img src={geoRandomizer} alt="Geographic Randomizer Preview" className="rounded img-fluid shadow-sm" />
            </div>

            <div className="col-lg-5 col-sm-12 bg-light card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title d-flex justify-content-end py-3 px-2">{projects[2].title}</h2>
                    <p className="lead d-flex justify-content-end">{projects[2].description}</p>
                    <p className="card-subtitle text-muted"><strong>Made with:</strong> HTML5, Materialize CSS, JavaScript, jQuery, Google Maps API, Google Places API </p>
                    <div className="d-flex justify-content-end"> 
                        <button type="button" className="btn btn-dark mx-1"><a href={projects[2].repo} className="text-light" target="_blank" rel="noreferrer">GitHub Repo</a></button>
                        <button type="button" className="btn btn-dark mx-1"><a href={projects[2].deployed} className="text-light" target="_blank" rel="noreferrer">GitHub Pages</a></button>
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Projects;