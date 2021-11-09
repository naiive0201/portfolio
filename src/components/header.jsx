/* eslint-disable no-console */
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 flex flex-1 flex-row items-center justify-between w-full h-12 bg-dark">
      <div className="leftDrawer p-4">
        <span className="material-icons-round text-white">menu</span>
      </div>
      <div className="title p-4">
        <h2 className="text-white">Hyeonsoo&apos;s Daily Log</h2>
      </div>
      <div className="rightIcon p-4">
        <span className="material-icons-round text-white ">search</span>
      </div>
    </header>
  );
}
