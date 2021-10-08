import React from 'react'; 

function Contact() {
    return (
    <div className="container" id="contact">
        <div className="row align-items-center">
            <div className="col-4">
                <div className="position-relative">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob-container">
                    <path fill="#D0E2FF" d="M50.1,-19.2C64,-4.7,74,21.9,65,38.5C56,55,28,61.6,0.3,61.4C-27.3,61.2,-54.6,54.3,-68,35.2C-81.4,16.1,-80.8,-15.1,-67.2,-29.4C-53.5,-43.7,-26.8,-41.1,-4.4,-38.6C18,-36.1,36.1,-33.6,50.1,-19.2Z" transform="translate(100 100)" />
                    </svg>

                    <h1 className="overlay-container display-6"><strong>Contact Me</strong></h1>
                </div>
            </div>

            <div className="col-8 "></div>
        </div>

        <div className="container">
            <p>GitHub</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>E-mail</p>
        </div>

    </div>
    );
}

export default Contact;