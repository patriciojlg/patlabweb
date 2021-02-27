import React, { Component } from 'react';
import Logo from '../Assets/Images/logo_patlab.png';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <Link to="/">
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li><a href="https://www.linkedin.com/company/patlab"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/patlab_chile/"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="https://www.facebook.com/Patlab-546458326283634"><i className="fa fa-facebook"></i></a></li>
                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p>
                                    <i className="fa fa-copyright"></i>Copyright
                                    <span> 2021 PATLAB. All rights reserved</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;