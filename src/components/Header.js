import React, { Component} from 'react';
import Logo from '../Assets/Images/logo_patlab.png';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {

    state = {
        isOpen: false,

    }
    
    render() {

        return(
            <header id="header" className="site-header header-style-1">
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <div id="navbar" className={ this.state.isOpen ? "navbar-collapse navigation-holder active" : "navbar-collapse navigation-holder"}>
                            <button className="close-navbar" onClick={() => this.setState({isOpen: false})}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <button className="close-navbar-2" onClick={() => this.setState({isOpen: false})}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <ul className="nav navbar-nav">
                                <li className="home">
                                <Link  to="/">
                                       <h2>Home</h2>
                                    </Link>
                                </li>
                                <li className="about">
                                    <Link  to="/#about">
                                        <h2>PRINCIPAL</h2>
                                    </Link>
                                </li>
                                <li className="service">
                                <Link  to="/#service">
                                        <h2>SERVICIOS</h2>
                                        </Link>
                                </li>
                                <li className="protfolio">
                                <Link  to="#contact">
                                        <h2>CONTACTO</h2>
                                    </Link>
                                </li>
                                <li className="blog">
                                    <a href="#blog">
                                    <h2>CLIENTES Y SOCIOS</h2>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="menu-open-btn-holder">
                            <button className="menu-open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;