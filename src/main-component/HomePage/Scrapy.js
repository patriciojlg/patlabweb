import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroScrapy from '../../Assets/Images/data_world_scrapy_empresa.jpg'
import AboutScrapy from '../../Assets/Images/scrapy.png'
import sr4 from '../../Assets/SVG/output.svg'
import sr5 from '../../Assets/SVG/injection.svg'
import sr6 from '../../Assets/SVG/customer-service.svg'

import sr1 from '../../Assets/SVG/anonimato.svg'
import sr2 from '../../Assets/SVG/mixer.svg'
import sr3 from '../../Assets/SVG/startup.svg'

import Landing from '../TemplatePages/Landing'

const WebScraping = () => {
    const data_landing = {
        title: "Web scraping Chile",
        thumbnail: "",
        hero_image: HeroScrapy,
        url: "https://patlab.cl/web-scraping",
        about_title: "AUTOMATIZA LA EXTRACION DE DATOS",
        about_p: "El web scraping es la automatización del proceso de extraer datos de varias páginas web. Posteriormente, los datos recolectados son analizados y utilizados para distintos fines. Como por ejemplo, captar clientes potenciales, analizar precios de mercado, auditar campañas publicitarias, porteger marcas, etc.",
        about_image: AboutScrapy,
        about_cta: "Ver más",
        feature_span: "Nuestros web-scraping cuenta con",
        feature_h2: "Ventajas sobresalientes",
        feature_1: "Anomizado y rotación de IP",
        feature_2: "Totalmente customizable",
        feature_3: "Potencia ilimitada",
        feature_4: "Output agnóstico",
        feature_5: "Inyecciones Ajax / Javascript",
        feature_6: "Soporte",
        feature_p_1: "Con anonimato y rotación de IP, a través, de proxy dinámicos evadimos cualquier intento de rastreo o baneo",
        feature_p_2: "Nuestros web-scraping están hechos a tu medida. Trabajamos en el código y la configuración de nuestros Scrapy hasta cumplir con tus exigencias",
        feature_p_3: "A diferencia de los RPA, Scrapy por medio del paralelismo y las concurrencias logra la velocidad de extración de datos que tú desees",
        feature_p_4: "La información extraída la dejamos donde tu quieras, desde un archivo excel a una arquitectura tipo data-lake",
        feature_p_5: "Algunos sitios requieren inyectar funciones javascript / ajax, para poder realizarles web-scraping. Cuenta con ello.",
        feature_p_6: "Le damos soporte a cualquier control de cambio que necesites implementar",
        feature_icon_1: sr1,
        feature_icon_2: sr2,
        feature_icon_3: sr3,
        feature_icon_4: sr4,
        feature_icon_5: sr5,
        feature_icon_6: sr6,
      }
    return (
        <Landing data={data_landing}/>
    )
};
export default WebScraping;


