import React, { useState, useEffect } from 'react';
import '../styles/Background.css';

const Background = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const [isSidebarOpen, setSidebarOpen] = useState(!isSmallScreen);

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 1024;
      setIsSmallScreen(smallScreen);

      // Automatically close sidebar on small screens
      if (smallScreen && isSidebarOpen) setSidebarOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="background">
      {/* Navbar */}
      <div className="navbar">
        {isSmallScreen && (
          <button onClick={toggleSidebar} className="sidebar-toggle">☰</button>
        )}
        <div className="navbar-title">
          <h1>Killian's Club</h1>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/networking">Networking</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`content ${isSmallScreen ? 'content-mobile' : 'content-desktop'}`}>
        {children}
      </div>
    </div>
  );
};

export default Background;
