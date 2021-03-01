import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default function Services({ span, h2, t1, p1, t2, p2, t3, p3, t4, p4, t5, p5, t6, p6, sr1, sr2, sr3, sr4, sr5, sr6, link1="", link2="", link3="", link4="", link5="", link6=""}) {

    return (
        <div id="service" className="service-area section-padding">
            <div className="borderd"></div>
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>{span}</span>
                        <h2>{h2}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to={link1}>
                        <div className="service-section">
                            <div className="services-wrapper">
                                <div className="services-icon-wrapper" style={{ border: "1px solid #52a8ba" }}>
                                    <div className="service-dot">
                                        <div className="dots" style={{ background: "#52a8ba" }}></div>
                                    </div>
                                    <i><img src={sr1} class="img_svg" width="50px" height="50px" alt="" /></i>
                                </div>
                                <div className="service-content">
                                    <h2>{t1}</h2>
                                    <p> {p1}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to={link2}>
                        <div className="service-section">
                            <div className="services-wrapper">
                                <div className="services-icon-wrapper" style={{ border: "1px solid #ffd75b" }}>
                                    <div className="service-dot">
                                        <div className="dots" style={{ background: "#ffd75b" }}></div>
                                    </div>
                                    <i><img src={sr2} class="img_svg" width="50px" height="50px" alt="" /></i>
                                </div>
                                <div className="service-content">
                                    <h2>{t2}</h2>
                                    <p> {p2}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to={link3}>
                        <div className="service-section">
                            <div className="services-wrapper">
                                <div className="services-icon-wrapper" style={{ border: "1px solid #52a8ba" }}>
                                    <div className="service-dot">
                                        <div className="dots" style={{ background: "#52a8ba" }}></div>
                                    </div>
                                    <i><img src={sr3} class="img_svg" width="50px" height="50px" alt="" /></i>
                                </div>
                                <div className="service-content">
                                    <h2>{t3}</h2>
                                    <p> {p3}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to={link4}>
                        <div className="service-section">
                            <div className="services-wrapper">
                                <div className="services-icon-wrapper" style={{ border: "1px solid #ff3d68" }}>
                                    <div className="service-dot">
                                        <div className="dots" style={{ background: "#ff3d68" }}></div>
                                    </div>
                                    <i><img src={sr4} class="img_svg" alt="" width="50px" height="50px"/></i>
                                </div>
                                <div className="service-content">
                                    <h2>{t4}</h2>
                                    <p> {p4}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to={link5}>
                        <div className="service-section">
                            <div className="services-wrapper">
                                <div className="services-icon-wrapper" style={{ border: "1px solid #8dca3c" }}>
                                    <div className="service-dot">
                                        <div className="dots" style={{ background: "#8dca3c" }}></div>
                                    </div>
                                    <i><img src={sr5} class="img_svg" alt="" width="50px" height="50px" /></i>
                                </div>
                                <div className="service-content">
                                    <h2>{t5}</h2>
                                    <p> {p5}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to={link6}>
                        <div className="service-section">
                            <div className="services-wrapper">
                                <div className="services-icon-wrapper" style={{ border: "1px solid #535cd9" }}>
                                    <div className="service-dot">
                                        <div className="dots" style={{ background: "#535cd9" }}></div>
                                    </div>
                                    <i><img src={sr6} class="img_svg" alt="" width="50px" height="50px"/></i>
                                </div>
                                <div className="service-content">
                                    <h2>{t6}</h2>
                                    <p> {p6}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </div>
    );

}
