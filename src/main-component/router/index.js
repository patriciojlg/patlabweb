import React from 'react';
import {HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage/index'
import WebScraping from '../HomePage/Scrapy'

import AppMovil from '../HomePage/AppMovil';
import MachineLearning from '../HomePage/MachineLearning';
import RPA from '../HomePage/RPA';





const AllRoute = () => {

  
  return (
    <div className="App">
  <BrowserRouter >
          <Route path='/web-scraping' component={WebScraping} />
          <Route path='/empresa-desarrollo-app-moviles' component={AppMovil} />
          <Route path='/machine-learning-chile' component={MachineLearning} />
          <Route exact path='/' component={Homepage} />
          <Route path='/RPA-Chile-robot-process-automatization' component={RPA} />
          </BrowserRouter>

    </div>
  );
}

export default AllRoute;
