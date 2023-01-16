import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import BoxAnimate from '../box/animate';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

const PrivateLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <BoxAnimate className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <Outlet />
        </main>
      </div>
    </BoxAnimate>
  );
};

export default PrivateLayout;
