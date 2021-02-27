import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import Slides from '../Assets/Images/transf_digital.png';

export default  function BannerMp4({title}) {

        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                        <video  type="video/mp4" autoPlay loop muted/>
                        </div>
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
                                        <a href="#contact" className="template-btn go-contact-area">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Transformaciones digitales</p></div>
                <div className="social-links">
                    <ul>
                        <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-pinterest"></i></Link></li>
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
