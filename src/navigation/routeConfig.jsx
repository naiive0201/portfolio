import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home';
import Header from '../components/header';
import NotFound from './notFound';
import { HOME, NOTFOUND } from './CONSTANT';

export default function RouteConfig() {
  const location = useLocation();

  return (
    <>
      {location.pathname === HOME && <Header />}
      <Routes>
        <Route path={HOME} exact element={<Home />} />
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}
