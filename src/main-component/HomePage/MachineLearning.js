import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroScrapy from '../../Assets/Images/machine-learning-chile.jpg'
import AboutScrapy from '../../Assets/Images/machine_learning_about.png'
import sr1 from '../../Assets/SVG/focus.svg'
import sr2 from '../../Assets/SVG/robotic.svg'
import sr3 from '../../Assets/SVG/warehouse.svg'
import sr4 from '../../Assets/SVG/machine-learning.svg'
import sr5 from '../../Assets/SVG/mixer.svg'
import sr6 from '../../Assets/SVG/cyber-attack.svg'
import Landing from '../TemplatePages/Landing';

const MachineLearning = () => {
    const data_landing = {
        title: "Machine Learning en Chile",
        thumbnail: "",
        hero_image: HeroScrapy,
        url: "https://patlab.cl/machine-learning-chile",
        about_title: "ANALIZA - PREDICE - LIDERA",
        about_p: "Los modelos de inteligencia artificial y analítica predictiva te permitirán conocer la actividad, el comportamiento y las tendencias de tu compañía en el futuro. Esta tecnología te ayuda a predecir lo que sucederá a través de técnicas estadísticas de modelización, aprendizaje automático y minería de datos.",
        about_image: AboutScrapy,
        about_cta: "Ver más",
        feature_span: "Logra el liderazgo tecnológico",
        feature_h2: "Con nuestras ventajas en ML",
        feature_1: "Reconocimiento visual",
        feature_2: "Procesamiento del lenguaje natural (NLP)",
        feature_3: "Aplicado al internet de las cosas",
        feature_4: "Modelos predictivos en tiempo real",
        feature_5: "Personalización (Customized)",
        feature_6: "Detección de anomalías y/o fraudes",
        feature_p_1: "A través de la visión computarizada somos capaces de procesar datos en formato imágen o videos, pudiendo así detectar rostros, objetos, tipo de movimientos, etc.",
        feature_p_2: "Con los últimos módulos de NLP como Bert (motor de procesamiento de Google) podemos procesar texto o voz transcrita, pudiendo atribuir y categorizar, sentido, intención y emocionalidad",
        feature_p_3: "A diferencia de los RPA, Scrapy por medio del paralelismo y las concurrencias logra la velocidad de extración de datos que tú desees",
        feature_p_4: "Los modelos de aprendizaje puede alimentarse de información concentrada en un data-lake y re-entrenarse de forma constante, esto les permite predecir de manera eficiente cualquier evento",
        feature_p_5: "A través de estadísticos de segmentación, podemos predecir lo que quieren tus clientes de acuerdo a sus intereses, la fecha del año, las tendencias del mercado. Con ML vendes de manera inteligente",
        feature_p_6: "Una de las insignias de ML es la detección de fraudes o anomalías, como en los filtros spam en email-servers o en detección de fraudes comerciales. Con ML te anticipas a las amenazas.",
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
export default MachineLearning;


