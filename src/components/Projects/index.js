import React from 'react'; 

function Projects() {
    const projects = [
        {
            title: "The Botanist",
            description: "",
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
            ]
        },
        {
            title: "Hunt for Helpers",
            description: "",
            icons: "",
            technologies: [
                'Handlebars.js',
                'Bootstrap CSS',
                'Sequelize',
                'Express.js',
                'Node'
            ]
        },
        {
            title: "Geographic Randomizer",
            description: "",
            icons: "",
            technologies: [
                'HTML5',
                'Materialize CSS',
                'JavaScript',
                'Google Maps API'
            ]
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
        

    </div>
    );
}

export default Projects;