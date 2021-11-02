import React from 'react'; 
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xpzknkey");

    if (state.succeeded) {
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


                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className="lead text-center pb-3">Interested in working on a project? Shoot me an e-mail.</p>

                            <p className="lead text-center pb-3">Thanks for your message! I will be in contact shortly.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <p className="lead text-center pb-3">You may also find me around here</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <p><a href="https://github.com/kdombrosky" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github-square fa-5x text-purple mx-2"></i>
                                </a></p>

                                <p><a href="https://www.linkedin.com/in/kdombrosky/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin fa-5x text-purple mx-2"></i>
                                </a></p>

                                <p><a href="https://www.linkedin.com/in/kdombrosky/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter-square fa-5x text-purple mx-2"></i>
                                </a></p>
                            </div>

                            <div className="d-flex justify-content-center align-items-center" >
                                <a href="https://drive.google.com/file/d/1LwwFUGpWUvVmZHcS8V9QLl-D-fIPxwH_/view" target="_blank" rel="noreferrer" className="lead text-dark" >Online resume here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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

        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <p className="lead text-center">Interested in working together? Shoot me an e-mail.</p>

                    <form onSubmit={handleSubmit} className="form-container">
                        <div className="form-group">
                            <label htmlFor="email" className="text-monospace">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email" 
                                name="email"
                                placeholder="Your email"
                                className="form-control mb-2 "
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Enter message"
                                className="form-control"
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <button type="submit" disabled={state.submitting} className="submit-btn btn bg-purple text-dark btn-lg btn-block">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className="pt-4">
                    <p className="lead text-center pb-3">You may also find me around here</p>
                    <div className="d-flex justify-content-center">
                        <p><a href="https://github.com/kdombrosky" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-square fa-5x text-purple mx-2"></i>
                        </a></p>
                        <p><a href="https://www.linkedin.com/in/kdombrosky/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin fa-5x text-purple mx-2"></i>
                        </a></p>

                        <p><a href="https://www.linkedin.com/in/kdombrosky/" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter-square fa-5x text-purple mx-2"></i>
                        </a></p>

                        <p><a href="mailto:kdombroskyy@gmail.com" target="_blank" rel="noreferrer">
                            <i className="fas fa-envelope-square fa-5x text-purple mx-2"></i>
                        </a></p>
                    </div>

                    <div className="d-flex justify-content-center" >
                        <button type="button" className="btn bg-purple text-dark btn-lg px-4">
                            <a href="https://drive.google.com/file/d/1kP7-rYEk-DruI1UQAjkPclf2S3q8vciy/view?usp=sharing" target="_blank" rel="noreferrer" className="lead">
                                Online Resume
                            </a>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;