import React from 'react'

const About = () => {
    return (
        <div className="container container-space" id="about">
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="lead">Skills: React, GraphQL, MongoDB, Mongoose, Express.js, Node.js, OAuth, Redux, IndexDB, REST API, HTML5, JavaScript, CSS, Bootstrap, Materialize, Tailwind CSS</p>
            <p className="lead">Currently Learning: Vue.js, Next.js, Python, AWS</p>
            

            <div className="row align-items-center">
            <div className="col-4">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob-container">
                <path fill="#D0E2FF" d="M51.9,-22.5C65.2,-6.8,72.7,19.8,63.1,34.2C53.5,48.6,26.7,50.8,0.9,50.3C-24.9,49.7,-49.8,46.4,-61,31.1C-72.2,15.8,-69.7,-11.5,-57.3,-26.7C-44.8,-41.9,-22.4,-45,-1.6,-44C19.2,-43.1,38.5,-38.2,51.9,-22.5Z" transform="translate(100 100)" />
                </svg>
                <h1 className="display-6 heading-center"><strong>My Projects</strong></h1>
            </div>

            <div className="col-8 ">
            </div>

        </div>
        </div>
    )
}

export default About;
