import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../TemplatePages/Landing';
import sr1 from '../../Assets/SVG/app.svg'
import sr2 from '../../Assets/SVG/mobile-service.svg'
import sr3 from '../../Assets/SVG/notification.svg'
import sr4 from '../../Assets/SVG/motion-sensor.svg'
import sr5 from '../../Assets/SVG/network.svg'
import sr6 from '../../Assets/SVG/mobile-app.svg'
import HeroScrapy from '../../Assets/Images/empresa_desarrollo_app_chile_01.jpg'
import AboutScrapy from '../../Assets/Images/app_movil_about.png'


function AppMovil(){
    const data_landing = {
        title: "Empresa desarrolladora de app móviles",
        thumbnail: "",
        hero_image: HeroScrapy,
        url: "https://patlab.cl/empresa-desarrollo-app-moviles",
        about_title: "UNA APP PARA TODOS LOS S.O.",
        about_p: "Desarrollamos el proyecto de tu app, de forma nativa (IOS+Android+Huawei incluído) e hibrida (PC Y Móvil). También, aplicamos tecnología serverless que te permite escalar tus costos dependiendo del uso de la APP",
        about_image: AboutScrapy,
        about_cta: "Ver más",
        feature_span: "Nuestros app móviles cuenta con",
        feature_h2: "Ventajas sobresalientes",
        feature_1: "App nativas (Android, IOS, Huawei)",
        feature_2: "App Hibridas",
        feature_3: "Notificaciones",
        feature_4: "Sensors hardware",
        feature_5: "Serverless",
        feature_6: "Interfaz de administrador",
        feature_p_1: "En un solo proyecto, generamos 3 versiones de tu app, para que sea instalable en cualquier sistema operativo móvil",
        feature_p_2: "Si lo necesitas también desarrollamos la versión web de tu app móvil",
        feature_p_3: "Fideliza dando una mejor experiencia a tus usuarios con sistema de notificaciones tipo push",
        feature_p_4: "Explotamos al máximo las características de los teléfonos moviles. Realizamos proyectos que requieran consumo de GPS, QR, Lector de retina, etc",
        feature_p_5: "La tecnología serverless te permite escalar los costos de tu app, pagando por servidores solo cuando los necesites",
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


