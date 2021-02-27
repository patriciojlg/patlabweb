import React, { Component } from 'react';

import ContactForm from './form'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
class Contact extends Component {


    render() {

        return (
            <div id="contact" className="contact-page-area section-padding go-contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="contact-page-item">
                                <h2>CONTACTA CON NOSOTROS</h2>
                                <p>Estamos aquí para ayudar y responder a cualquier pregunta que puedas tener. Escríbenos sobre lo siguiente:</p>
                                <ul style={{color: "#d2d2d2",
marginLeft: "30px",
fontSize: "1em",
marginBottom: "7px"}} >
                                    <li>Soporte de ventas </li>
                                    <li>Soporte técnico</li>
                                    <li>Soporte de conformidad </li>
                                    <li>Soporte de cuenta/facturación   </li>
                                    </ul>
<br></br>

                                <div className="phone">
                                <h3>Dirección</h3>
                                <p>Av. Manuel Month 4120 (Providencia, Santiago de Chile)</p>
                                

                                    <WhatsAppWidget message="'Hola! 👋🏼 En qué podemos ayudarte?'" phoneNumber='+56991092562' />
                                </div>
                          
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="contact-area contact-area-2 contact-area-3">
                                <h2>CONTÁCTANOS</h2>
                                <div className="contact-form">
                                    <ContactForm />
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
}

export default Contact;