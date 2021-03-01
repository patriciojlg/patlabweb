import React, { Fragment, lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroIndex from '../../Assets/Images/empresa_software.webp'
import AboutIndex from '../../Assets/Images/developer_team_webp.webp'
import SEO from '../../components/SEO';
import sr1 from '../../Assets/SVG/web-programming.svg'
import sr2 from '../../Assets/SVG/data-gathering.svg'
import sr3 from '../../Assets/SVG/investment.svg'
import sr4 from '../../Assets/SVG/cloud-network.svg'
import sr5 from '../../Assets/SVG/migrating.svg'
import sr6 from '../../Assets/SVG/mobile-app.svg'
import Services from '../../components/Services';

const Banner = lazy(() => import('../../components/Banner'));
const About = lazy(() => import('../../components/About'));
const Contact = lazy(() => import('../../components/Contact'));
const Footer = lazy(() => import('../../components/Footer'));
const Scrollbar = lazy(() => import('../../components/scroolbar'));
const Navbar = lazy(() => import('../../components/Navbar'));



const HomePage = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SEO title="PATLAB - Empresa desarrolladora de software a medida en Chile" thumbnail={AboutIndex} url="https://patlab.cl/" />

            
                <Navbar />
         
                <Banner hero={HeroIndex} title="Empresa de desarrollo de software a medida" />
          
                <About
                    aboutImg={AboutIndex}
                    title="DESARROLLAMOS SOFTWARE A MEDIDA"
                    p1="Explore las 6 soluciones principales que ofrecemos en tecnología de la información enfocada a la transformación digital. 
                Obtenga la eficiencia de la automatización de procesos y la inteligencia del Machine Learning"
                />
                <Services sr1={sr1} sr2={sr2} sr3={sr6} sr4={sr4} sr5={sr5} sr6={sr3}
                    link2="/web-scraping"
                    link3="/empresa-desarrollo-app-moviles"
                    link4="/machine-learning-chile"
                    link5="/RPA-Chile-robot-process-automatization"
                    span="Servicios"
                    h2="Nuestras soluciones"
                    t1="Desarrollo en general"
                    p1="Convierte tu proyecto en la mejor solución con nuestra experiencia en desarrollo y la potencia de la arquitectura Cloud"
                    t2="Web Scraping"
                    p2="Maneja el pricing de tu mercado en tiempo real. Revisa la presencia de tu marca en internet. Audita tus campañas de forma automatizada y mucho más."
                    t3="App Móviles"
                    p3="Auditamos tu trabajo en SEO. Optimizamos tu inversión al máximo. Generamos un plan de marketing basado en machine learning y scraping de mercado"
                    t4="Machine Learning"
                    p4="Desacopla los servicios escenciales de tu negocio para una alta disponibilidad. Carros de compra, facturación, email transaccionales, trackeo de pedidos, etc"
                    t5="RPA"
                    p5="Ahorra hasta un 75% de tu inversión en servidores y servicios migrándote a AWS con nosotros"
                    t6="Inteligencia de negocios"
                    p6="Desarrollamos tu aplicación móvil de forma nativa, en un sólo proyecto obtén sus 3 versiones (IOS, Android y Huawei)"
                />
                <Contact />
           
                <Footer />
      
                <Scrollbar />
            </Suspense>
   
    )
};
export default HomePage;


