import React from 'react'; 
import logo from '../../assets/profile-pic.png'

function Hero() {
    return (
    <div className="container" id="hero">
        <div className="row align-items-center justify-content-around hero">
            <div className="col-lg-8 col-sm-12  ">
                <h1 className="display-6"><strong>Welcome to my portfolio, I'm Kayla.</strong></h1>
                <h1 className="display-6"><strong>Front-End Developer.</strong></h1>
                <p className="text-muted font-weight-light">I love to code and design clean and accessible apps.</p>
            </div>

            <div className="col-lg-4 col-sm-6">
                <img alt="profile" src={logo} className="profile-pic" />
            </div>
        </div>
    </div>
    );
}

export default Hero;