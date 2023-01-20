import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CgFileDocument } from 'react-icons/cg';
import { BsSpeedometer2 } from 'react-icons/bs';
import { FiSend, FiUsers } from 'react-icons/fi';
import { IoMdTimer } from 'react-icons/io';

import classNames from '../utils/classnames';

const menuList = [
  {
    to: '/',
    name: 'Dashboard',
    icon: BsSpeedometer2,
    id: 'dashboard',
  },
  {
    to: '/form',
    name: 'Form',
    icon: CgFileDocument,
    id: 'form',
  },
  {
    to: '/broadcast',
    name: 'Broadcast',
    icon: FiSend,
    id: 'broadcast',
  },
  {
    to: '/users',
    name: 'Staff',
    icon: FiUsers,
    id: 'staff',
  },
  {
    to: '/changelog',
    name: 'Changelog',
    icon: IoMdTimer,
    id: 'changelog',
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded ?? true,
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={classNames(
          'flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 p-4 transition-all duration-200 ease-in-out',
          sidebarOpen ? 'translate-x-0' : '-translate-x-64',
          [sidebarOpen && 'bg-animate'],
          ' shadow-sm shadow-black bg-secondary-default lg:bg-opacity-[45%]',
        )}>
        <div className="flex justify-between mb-10 pr-3 sm:px-2 w-full">
          <button
            ref={trigger}
            className="lg:hidden text-white hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}>
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink
            end
            to="/"
            className="block font-bold text-white mx-auto font-oxigen text-center">
            <div className="lg:hidden">
              <h1 className="text-2xl">AdminSelvi</h1>
              <span className="block text-right leading-none text-sm">
                ver 1.0
              </span>
            </div>
            <div className="invisible lg:visible">
              {sidebarExpanded ? (
                <>
                  <h1 className="text-2xl">AdminSelvi</h1>
                  <span className="block text-right leading-none text-sm">
                    ver 1.0
                  </span>
                </>
              ) : (
                <h1 className="text-2xl mb-[14px]">AS</h1>
              )}
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          <ul className="mt-3 -mr-7">
            {menuList?.map((e) => {
              const Icon = e.icon;
              return (
                <li className="p-2 rounded-l-full" key={e.id}>
                  <NavLink
                    to={e.to}
                    className={({ isActive }) =>
                      classNames(
                        'flex items-center justify-between p-2 pr-7 text-white font-bold text-xl',
                        'hover:rounded-l-full hover:bg-primary-70 hover:bg-opacity-70',
                        [
                          isActive &&
                            'rounded-l-full bg-primary-50 bg-opacity-50',
                        ],
                        isActive.toString(),
                      )
                    }>
                    <div className="flex items-center">
                      <Icon className="text-secondary-70" />
                      <span className="text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        {e.name}
                      </span>
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
              className="text-white">
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24">
                <path
                  className=""
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
