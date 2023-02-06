import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import BoxAnimate from '../box/animate';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Toast from '../Toast';
import useToast from '../../context/toastContext';

const PrivateLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { open, message, setOpen, type } = useToast();
  return (
    <BoxAnimate className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <Toast
            open={open}
            setOpen={setOpen}
            className="absolute right-2 transition-opacity"
            type={type}>
            {message}
          </Toast>
          <Outlet />
        </main>
      </div>
    </BoxAnimate>
  );
};

export default PrivateLayout;
