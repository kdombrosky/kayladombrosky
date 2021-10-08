import React from 'react'; 
import logo from '../../assets/profile-pic.png'

function Hero() {
    return (
    <div className="container container-space" id="hero">
        <div className="row align-items-center pt-5">
            <div className="col-8 ">
                <h1 className="display-6"><strong>Welcome to my portfolio, I'm Kayla.</strong></h1>
                <h1 className="display-6"><strong>Front-End Developer.</strong></h1>
                <p className="text-muted font-weight-light">I love to code and design clean and accessible apps.</p>
            </div>

            <div className="col-4">
                <img alt="profile" src={logo} className="profile-pic" />
            </div>
        </div>
    </div>
    );
}

export default Hero;