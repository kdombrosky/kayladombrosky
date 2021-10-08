import React from 'react'; 
import logo from '../../assets/favicon-32x32.png';

function Footer() {
    return (
    <footer className=" bg-dark text-center text-lg-start text-muted" id="resume">
        <section className="d-flex justify-content-center justify-content-lg-between p-4">
    
            <div className="me-5 d-none d-lg-block"><img src={logo} alt=""></img> <strong className="px-2">2021</strong> </div>
            <div className="me-5 d-none d-lg-block">Thanks for visiting! </div>
            <div>
            <a href="https://github.com/kdombrosky" target="_blank" rel="noreferrer" className="me-4 text-reset">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kdombrosky/" target="_blank" rel="noreferrer" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto: kdombrosky@gmail.com" target="_blank" rel="noreferrer" className="me-4 text-reset">
                <i className="fab fa-google"></i>
            </a>
            <a href="https://twitter.com/kae_aii" target="_blank" rel="noreferrer" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
            </a>
            </div>
        </section>
    </footer>
    );
}

export default Footer;

