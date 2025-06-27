import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi'; 

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 relative">
      {/* Toggle Button - Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-800 bg-white shadow p-2 rounded-md"
        >
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed md:relative top-0 left-0 w-64 bg-white shadow-lg p-6 z-40 transform transition-transform duration-300 ease-in-out h-screen ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
       <div className="mt-10">
         <Link to='/' className="text-xl md:text-3xl font-bold text-primary my-10 block">
          HobbyHub
        </Link>
        <nav className="space-y-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                  isActive ? 'text-primary font-bold' : 'text-gray-700'
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/thegroups'
                className={({ isActive }) =>
                  isActive ? 'text-primary font-bold' : 'text-gray-700'
                }
              >
                Groups
              </NavLink>
            </li>
          </ul>
        </nav>
       </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-0 md:ml-64 transition-all">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
