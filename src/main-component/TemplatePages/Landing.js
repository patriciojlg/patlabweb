import React, { Fragment } from 'react';
import About from '../../components/About';
import Features from '../../components/Feature';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Scrollbar from '../../components/scroolbar'
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../components/SEO';
import Banner from '../../components/Banner';


function Landing({ data }) {
    console.log({ data })
    return (
        <Fragment>
            <SEO title={data.title} thumbnail={data.thumbnail} url={data.url} />
            <Navbar />
            <Banner hero={data.hero_image} title={data.title} />
           
            <About
                aboutImg={data.about_image}
                title={data.about_title}
                p1={data.about_p}
                cta={data.about_cta} />
            <Features
                span={data.feature_span}
                h2={data.feature_h2}
                t1={data.feature_1}
                t2={data.feature_2}
                t3={data.feature_3}
                t4={data.feature_4}
                t5={data.feature_5}
                t6={data.feature_6}
                p1={data.feature_p_1}
                p2={data.feature_p_2}
                p3={data.feature_p_3}
                p4={data.feature_p_4}
                p5={data.feature_p_5}
                p6={data.feature_p_6}
                sr1={data.feature_icon_1}
                sr2={data.feature_icon_2}
                sr3={data.feature_icon_3}
                sr4={data.feature_icon_4}
                sr5={data.feature_icon_5}
                sr6={data.feature_icon_6}
            />
            <Contact />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Landing;


