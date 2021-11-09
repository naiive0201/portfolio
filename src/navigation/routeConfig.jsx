import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Header from '../components/header';
import NotFound from './notFound';
import { HOME, ABOUT, NOTFOUND } from './CONSTANT';

export default function RouteConfig() {
  const location = useLocation();

  return (
    <>
      {(location.pathname === HOME || location.pathname === ABOUT) && <Header />}
      <Routes>
        <Route path={HOME} exact element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}
