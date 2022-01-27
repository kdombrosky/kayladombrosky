import React from 'react'

const About = () => {
    return (
        <section id="about">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill="#D0E2FF" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,144C840,160,960,160,1080,149.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg> 
            <div className="bg-custom">
                <div className="container">
                    <p className="lead fs-4 pb-3 text-center">
                    Full-Stack Developer with a passion for designing intuitive, fun and creative digital spaces. 
                    Coming from a background of live and creative events and production, with a desire to include that inspiration in professional digital work.  
                    </p>
                    <p className="display-6 text-center">Technologies</p>

                    <div className="text-light d-flex justify-content-around flex-wrap">
                        <i className="devicon-html5-plain-wordmark tech-icon-custom"></i>
                        <i className="devicon-javascript-plain tech-icon-custom"></i>
                        <i className="devicon-css3-plain-wordmark tech-icon-custom"></i>
                        <i className="devicon-bootstrap-plain-wordmark tech-icon-custom"></i>
                        <i className="devicon-tailwindcss-original-wordmark tech-icon-custom"></i>
                        <i className="devicon-mysql-plain-wordmark tech-icon-custom"></i>
                        <i className="devicon-mongodb-plain-wordmark tech-icon-custom"></i>
                        <i className="devicon-express-original-wordmark tech-icon-custom"></i>
                        <i className="devicon-graphql-plain-wordmark tech-icon-custom"></i>
                        <i className="devicon-react-original-wordmark tech-icon-custom"></i>
                        <i className="devicon-nodejs-plain tech-icon-custom"></i>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill="#D0E2FF" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,144C840,160,960,160,1080,149.3C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </section>
    )
}

export default About;
