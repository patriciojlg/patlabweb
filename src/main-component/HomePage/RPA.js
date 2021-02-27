import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroScrapy from '../../Assets/Images/rpa_hero.jpg'
import AboutScrapy from '../../Assets/Images/rpa_about.png'
import sr1 from '../../Assets/SVG/browser.svg'
import sr2 from '../../Assets/SVG/cloud-intelligence.svg'
import sr3 from '../../Assets/SVG/email.svg'
import sr4 from '../../Assets/SVG/programming.svg'
import sr5 from '../../Assets/SVG/bot.svg'
import sr6 from '../../Assets/SVG/chat.svg'
import Landing from '../TemplatePages/Landing';

const RPA = () => {
    const data_landing = {
        title: "Desarrollamos RPA: Robotic Process Automatization",
        thumbnail: HeroScrapy,
        hero_image: HeroScrapy,
        url: "https://patlab.cl/RPA-Chile-robot-process-automatization",
        about_title: "¿Tienes trabajo para robots?",
        about_p: "En patlab desarrollamos RPA a través de código en python y/o node js. Lo cual nos da una mayor versatilidad que cualquier RPA prefabricado. Como también libera a nuestros clientes de pagos de licencias y les permite tecnología serverless (sin gasto de servidor).",
        about_image: AboutScrapy,
        about_cta: "Ver más",
        feature_span: "Optimiza tus tiempos",
        feature_h2: "Con tecnología RPA disruptiva",
        feature_1: "Navegación automatizada",
        feature_2: "Trabajos en la Nube",
        feature_3: "Emails",
        feature_4: "SFTP",
        feature_5: "ERP (SAP, ZOHO, ODOO, ETC)",
        feature_6: "Redes sociales",
        feature_p_1: "¿Tedio por realizar tareas web repetitivas? No solo podemos automatizarlas, sino también realizarlas en hilos de simultaniedad como si tuvieras 100 o más ayudantes. Cuéntanos que es lo que necesitas y lo hacemos.  ",
        feature_p_2: "AWS, AZURE, Google Cloud, Microsoft 360, etc. Automatizamos cualquier tarea en la nube.",
        feature_p_3: "¿Necesitas automatizar correos dependiendo de eventos? Con RPA esto es cosa de minútos. También podemos usar los emails como notificaciones e informes del funcionamiento de un RPA",
        feature_p_4: "Necesitas respaldar, crear repositorios, verificar la existencia de archivos etc. Desarrollamos RPA con certificados PEM de encriptación asimétrica para alta seguridad. El manejo de tus archivos será rápido, seguro y confiable",
        feature_p_5: "Los ERP vienen a ordenar el negocio, pero no eso no significa que sea menos trabajo. Con RPA, sí se puede lograr. Consigue el order y la gestión de los ERP con la velocidad y eficacia de los RPA",
        feature_p_6: "¿Demasiado trabajo en redes sociales? Podemos trabajar un día, calendarizar y dejar que el RPA se encargue de postear, leer y notificar todo el trabajo rutinario. Deja el trabajo humano para lo realmente humano.",
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
export default RPA;


