import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-800 bg-white shadow p-2 rounded-md"
        >
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 w-64 bg-white shadow-lg p-6 z-40 transition-transform duration-300 ease-in-out 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        h-screen md:h-screen overflow-y-auto`}
      >
        <div className="mt-10">
          <Link
            to="/"
            className="text-xl md:text-3xl font-bold text-primary mt-10 mb-3 text-center block"
          >
            HobbyHub
          </Link>

          <hr className="my-4" />

          <nav className="space-y-4">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/dashboard"
                  className="text-semibold hover:text-primary"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/dashAllGroup"
                  className="text-semibold hover:text-primary"
                >
                  All Groups
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myGroups"
                  className="text-semibold hover:text-primary"
                >
                  My Groups
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/createGroup"
                  className="text-semibold hover:text-primary"
                >
                 Create Group
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-0 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
