import React from 'react'; 
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xpzknkey");

    if (state.succeeded) {
        return (
            <section id="contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                    <path fill="#D0E2FF" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,96C672,96,768,160,864,170.7C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

                <div className="bg-custom">
                    <div className="container">
                        <h2 className="text-center pb-5 display-4">Contact</h2>


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
            </div>
            </section>
        );
    }

    return (
        <section id="contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#D0E2FF" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,96C672,96,768,160,864,170.7C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className="bg-custom">
                <div className="container">
                    <h2 className="text-center pb-5 display-4">Contact</h2>

                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <p className="lead text-center">Interested in working together? Shoot me an e-mail.</p>

                                <form onSubmit={handleSubmit} className="form-container">
                                    <div className="form-group">
                                        <label htmlFor="email" className="px-1">
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
                                        <label htmlFor="message" className="px-1">
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

                                    <button type="submit" disabled={state.submitting} className="submit-btn btn btn-custom text-light btn-lg btn-block">
                                        Submit
                                    </button>
                                </form>
                            </div>

                            <div className="col-lg-6 col-sm-12">
                                <div className="pt-4">
                                    <p className="lead text-center pb-3">You may also find me around here</p>
                                    <div className="d-flex justify-content-center">
                                        <p><a href="https://github.com/kdombrosky" target="_blank" rel="noreferrer">
                                            <i className="fab fa-github-square fa-5x social-icon-custom mx-2"></i>
                                        </a></p>
                                        <p><a href="https://www.linkedin.com/in/kdombrosky/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-linkedin fa-5x social-icon-custom mx-2"></i>
                                        </a></p>

                                        <p><a href="https://www.linkedin.com/in/kdombrosky/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-twitter-square fa-5x social-icon-custom mx-2"></i>
                                        </a></p>

                                        <p><a href="mailto:kdombroskyy@gmail.com" target="_blank" rel="noreferrer">
                                            <i className="fas fa-envelope-square fa-5x social-icon-custom mx-2"></i>
                                        </a></p>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-custom btn-lg px-4">
                                            <a href="https://drive.google.com/file/d/1kP7-rYEk-DruI1UQAjkPclf2S3q8vciy/view?usp=sharing" target="_blank" rel="noreferrer" className="lead text-light">
                                                Online Resume
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;