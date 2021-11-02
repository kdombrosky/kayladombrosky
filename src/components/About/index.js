import React from 'react'

const About = () => {
    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill="#D0E2FF" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,144C840,160,960,160,1080,149.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg> 
            <div className="bg-custom">
                <div className="container" id="about">
                    <p className="lead fs-4 pb-3">Full-Stack Developer with a background in events and production, with a passion for creating fun and meaningful projects. 
                    Highly interested in filling a front-end position to continue learning and practicing leading design techniques!   
                    </p>
                    <p className="display-6 text-center">Technologies</p>

                    <div className="text-light d-flex justify-content-around flex-wrap">
                        <i className="devicon-html5-plain-wordmark icon-custom"></i>
                        <i className="devicon-javascript-plain icon-custom"></i>
                        <i className="devicon-css3-plain-wordmark icon-custom"></i>
                        <i className="devicon-graphql-plain-wordmark icon-custom"></i>
                        <i className="devicon-bootstrap-plain-wordmark icon-custom"></i>
                        <i className="devicon-tailwindcss-original-wordmark icon-custom"></i>
                        <i className="devicon-mysql-plain-wordmark icon-custom"></i>
                        <i className="devicon-mongodb-plain-wordmark icon-custom"></i>
                        <i className="devicon-express-original-wordmark icon-custom"></i>
                        <i className="devicon-react-original-wordmark icon-custom"></i>
                        <i className="devicon-nodejs-plain icon-custom"></i>
                    </div>

                    {/* HTML5, JavaScript, CSS, React, GraphQL, Redux, IndexedDB, REST API, Bootstrap, Materialize, Tailwind */}
                    {/* <p className="lead mb-0"><strong>Back End:</strong> Express.js, Node.js, MongoDB, Mongoose, OAuth, SQL, Sequelize</p> */}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill="#D0E2FF" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,144C840,160,960,160,1080,149.3C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </section>
    )
}

export default About;
