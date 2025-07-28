
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";

const RootLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const noSidebarRoutes = ["/signin", "/signup"];
  const noSidebarRoutes = ["/signin", "/signup","/forgotPassword"];
  const showSidebar = !noSidebarRoutes.includes(location.pathname.toLowerCase());

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Sidebar */}
      {showSidebar && (
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      {/* Main content */}
      <main className="flex-1  overflow-auto w-full">
        {/* Menu icon on small screens */}
        {showSidebar && (
          <button
            className="sm:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
            onClick={toggleSidebar}
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
