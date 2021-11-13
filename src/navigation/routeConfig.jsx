import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Header from '../components/header';
import NotFound from './notFound';
import { HOME, ABOUT, NOTFOUND, TODO } from './CONSTANT';
import Todo from '../pages/todo/todoPage';

export default function RouteConfig() {
  const location = useLocation();

  return (
    <>
      {(location.pathname === HOME ||
        location.pathname === ABOUT ||
        location.pathname === TODO) && <Header />}
      <Routes>
        <Route path={HOME} exact element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={NOTFOUND} element={<NotFound />} />
        <Route path={TODO} element={<Todo />} />
      </Routes>
    </>
  );
}
