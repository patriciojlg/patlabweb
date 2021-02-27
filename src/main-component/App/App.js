import React from 'react';
import AllRoute from '../router'
import './App.css';
import '../../Assets/Css/Responsive.css'
import { routesCreater as createRoutes } from 'react-router-sitemap';
import { routesParser as parseRoutes } from 'react-router-sitemap';
import { Route } from 'react-router-dom';

const App = () => { 


  return (
    <div className="App br-app" id='scrool'>
          <AllRoute/>
          
    </div>
  );
}

export default App;
