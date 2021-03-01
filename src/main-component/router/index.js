import React, { Suspense, lazy} from 'react';
import {HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'

const Homepage = lazy(() => import('../HomePage/index'));
const WebScraping = lazy(() => import('../HomePage/Scrapy'));
const AppMovil = lazy(() => import('../HomePage/AppMovil'));
const MachineLearning = lazy(() => import('../HomePage/MachineLearning'));
const RPA = lazy(() => import('../HomePage/RPA'));




const AllRoute = () => {

  
  return (
    <div className="App">
  <BrowserRouter >
  <Suspense fallback={<div>Loading...</div>}>
          <Route path='/web-scraping' component={WebScraping} />
          <Route path='/empresa-desarrollo-app-moviles' component={AppMovil} />
          <Route path='/machine-learning-chile' component={MachineLearning} />
          <Route exact path='/' component={Homepage} />
          <Route path='/RPA-Chile-robot-process-automatization' component={RPA} />
          </Suspense>
          </BrowserRouter>

    </div>
  );
}

export default AllRoute;
