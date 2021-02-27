import React, { Component } from 'react';

import {Link} from 'react-router-dom'

export default function About({title, aboutImg, p1, p2, cta, cta_link}){
        return (
            <div id="about" className="about-area">
                <div className="borderd"></div>
                <div className="container">
                    <div className="about-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img className="about-img-png" src={aboutImg} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
        <h2>{title}</h2>
        <p className="paragraph_banner">{p1}</p>
                                    
                                        <a href="#service" className="banner-btn-more template-btn go-contact-area">Ver más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white_svg svg_white">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </div>
        );

}

