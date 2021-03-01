import React, { Component } from 'react';

import { Link } from 'react-router-dom'



export default function Banner({ title, hero }) {

    return (
        <section id="home" className="hero hero-slider-wrapper hero-style-1">
            <div>
                <div className="slide" style={{
                    backgroundImage: `linear-gradient(to right top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.05)), url(${hero})`,
                    backgroundSize: "cover",
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col col-md-8 col-sm-12 slide-caption">
                                <div className="slide-subtitle">
                                    <h4>PATLAB</h4>
                                </div>
                                <div className="slide-title">
                                    <h2>{title}
                                    </h2>
                                </div>
                                <div className="btns">
                                    <a href="#contact" className="banner-btn-cta template-btn go-contact-area">Contáctanos</a>
                                    <a href="#service" className="banner-btn-more template-btn go-contact-area">Ver más</a>

                                </div>
                                <div className="btns">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy"><p>Transformaciones digitales</p></div>
            <div className="social-links">
                <ul>
                    <li><a href="https://www.linkedin.com/company/patlab"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/patlab_chile/"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/Patlab-546458326283634"><i className="fa fa-facebook"></i></a></li>

                </ul>
            </div>
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </section>
    )

}
