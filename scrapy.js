import React, { Fragment } from 'react';

import About from '../../components/About';
import Features from '../../components/Feature';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from '../../components/Blog';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Testimonial from '../../components/Testimonial';
import Portfolio from '../../components/Portfolio';
import Scrollbar from '../../components/scroolbar'
import Navbar from '../../components/Navbar';

import BannerMp4 from '../../components/BannerMp4.js'
import SEO from '../../components/SEO';


const WebScraping = () => {
    return (
        <Fragment>
            <SEO title="Web scraping Chile" thumbnail={BannerMp4} url="https://patlab.cl/web-scraping"/>
            <Navbar />
            <BannerMp4 title="hacemos web scraping" />
            <About
                title="Ponte en ventaja "
                p1="Obtén toda la información de tu competencia y las características de tu mercado.
             Calculando en tiempo real el pricing de tus productos, averigua las novedades que impulsa tu competencia,
            obten datos de tus prospectos en las redes sociales de tu competencia, o lo que imagines hacer con la información de la web.
              "
                cta="Contáctanos" />
            <Features
                span="Nuestros scraping cuenta con"
                h2="Ventajas sobresalientes"
                t1="Anomizado y rotación de IP"
                p1="El anonimato y rotación evaden cualquier intento de baneo"
                t2="Totalmente customizable"
                p2="Nuestros web-scraping están hechos a tu medida"
                t3="Elasticidad"
                p3="Nuestros scraping tienen una potencia infinita en concurrencia y paralelismo"
                t4="99.9s% Online"
                p4="Todos nuestros servicios tienen la mejor disponibilidad del mercado"
                t5="Data cruda o limpia"
                p5="Tu eliges como quieres la data, nos adaptamos a tu arquitectura"
                t6="Soporte"
                p6="Le damos soporte a cualquier control de cambio que necesites implementar"
            />
            <Contact />
            <Testimonial />
            <Blog />






            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default WebScraping;


