import React from 'react'; 
import theBotanist from '../../assets/the-botanist-preview.png';
import geoRandomizer from '../../assets/geographic-randomizer-preview.png';

function Projects() {
    const projects = [
        {
            title: "The Botanist",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitese, a sed do eiusmod tempor incididunt ut labore et dolorean magna aliqua.",
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
            repo: "",
            deployed: ""
        },
        {
            title: "Hunt for Helpers",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elites, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icons: "",
            technologies: [
                'Handlebars.js',
                'Bootstrap CSS',
                'Sequelize',
                'Express.js',
                'Node'
            ],
            repo: "",
            deployed: ""
        },
        {
            title: "Geographic Randomizer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icons: "",
            technologies: [
                'HTML5',
                'Materialize CSS',
                'JavaScript',
                'Google Maps API'
            ],
            repo: "",
            deployed: ""
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
        <div className="row row-eq-height align-items-center space-bottom">
            <div className="col-7">
                <img src={theBotanist} alt="The Botanist Preview" className="contained-img shadow-sm" />
            </div>

            <div className="col-5 bg-light card d-flex align-items-stretch">
                <div className="card-body">
                    <h2 className="card-title d-flex justify-content-end px-2">{projects[0].title}</h2>
                    <p className="lead d-flex justify-content-end">{projects[0].description}</p>
                    <p className="card-subtitle text-muted"><strong>Made with:</strong> React, Tailwind CSS, GraphQL, MongoDB, Express.js, Node, OAuth, Stripe </p>
                    <a href="#">GitHub Repo</a>
                    <a href="#">Heroku Deployment</a>
                </div>
            </div>
        </div>


        {/* Hunt for Helpers */}
        <div className="row row-eq-height align-items-center space-bottom">
            <div className="col-5 bg-light card">
                <div className="card-body">
                    <h2 className="card-title d-flex justify-content-end px-2">{projects[2].title}</h2>
                    <p className="lead d-flex justify-content-end">{projects[2].description}</p>
                    <p className="card-subtitle text-muted"><strong>Made with:</strong> React, Tailwind CSS, GraphQL, MongoDB, Express.js, Node, OAuth, Stripe </p>
                    <a href="#">GitHub Repo</a>
                    <a href="#">Heroku Deployment</a>
                </div>
            </div>

            <div className="col-7">
                <img src={geoRandomizer} alt="The Botanist Preview" className="contained-img shadow-sm" />
            </div>
        </div>


        {/* Geographic Randomizer */}
        <div className="row row-eq-height align-items-center">
            <div className="col-7">
                <img src={geoRandomizer} alt="The Botanist Preview" className="contained-img shadow-sm" />
            </div>

            <div className="col-5 bg-light card">
                <div className="card-body">
                    <h2 className="card-title d-flex justify-content-end px-2">{projects[2].title}</h2>
                    <p className="lead d-flex justify-content-end">{projects[2].description}</p>
                    <p className="card-subtitle text-muted"><strong>Made with:</strong> React, Tailwind CSS, GraphQL, MongoDB, Express.js, Node, OAuth, Stripe </p>
                    <a href="#">GitHub Repo</a>
                    <a href="#">GitHub Pages</a>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Projects;