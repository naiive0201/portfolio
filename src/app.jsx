import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteConfig from './navigation/routeConfig';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  );
}

export default App;
