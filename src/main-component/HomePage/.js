import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../TemplatePages/Landing';
import sr1 from '../../Assets/SVG/web-programming.svg'
import sr2 from '../../Assets/SVG/data-gathering.svg'
import sr3 from '../../Assets/SVG/investment.svg'
import sr4 from '../../Assets/SVG/cloud-network.svg'
import sr5 from '../../Assets/SVG/migrating.svg'
import sr6 from '../../Assets/SVG/mobile-app.svg'
import HeroScrapy from '../../Assets/Images/empresa_desarrollo_app_chile_01.jpg'
import AboutScrapy from '../../Assets/Images/app_movil_about.png'


function AppMovil(){
    const data_landing = {
        title: "Empresa desarrolladora de app móviles",
        thumbnail: "",
        hero_image: HeroScrapy,
        url: "https://patlab.cl/empresa-desarrollo-app-moviles",
        about_title: "Nuestras app son provicionadas o serverless",
        about_p: "Desarrollamos el proyecto de tu app, de forma nativa (IOS+Android+Huawei incluído) e hibrida (PC Y Móvil). También, puedes contar con tecnología serverless que te permitirá escalar tus valores dependiendo del uso",
        about_image: AboutScrapy,
        about_cta: "Ver más",
        feature_span: "Nuestros app móviles cuenta con",
        feature_h2: "Ventajas sobresalientes",
        feature_1: "App nativas (Android, IOS, Huawei)",
        feature_2: "App Hibridas",
        feature_3: "Notificaciones",
        feature_4: "Gps y sensores",
        feature_5: "Gráficos y B.I.",
        feature_6: "Interfaz de administrador",
        feature_p_1: "En un solo proyecto, generamos 3 versiones de tu app, para que sea instalable en cualquier sistema operativo móvil",
        feature_p_2: "Si lo necesitas también desarrollamos la versión web de tu app móvil",
        feature_p_3: "Fideliza dando una mejor experiencia a tus usuarios con sistema de notificaciones tipo push",
        feature_p_4: "Explotamos al máximo las características de los teléfonos moviles. Realizamos proyectos que requieran consumo de GPS, QR, Lector de retina, etc",
        feature_p_5: "Incorporamos, si lo necesitas, dashboard de inteligencia de negocio u otros gráficos en tu proyecto.",
        feature_p_6: "Administra usuarios, permisos y visualiza el rendimiento de tu aplicación a través de la interfaz de administrador",
        feature_icon_1: sr1,
        feature_icon_2: sr2,
        feature_icon_3: sr3,
        feature_icon_4: sr4,
        feature_icon_5: sr5,
        feature_icon_6: sr6,
      }
    
    return(
       <Landing data={data_landing}/>
    )
};
export default AppMovil;


