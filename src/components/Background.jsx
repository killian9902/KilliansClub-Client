import React, { useState } from 'react';
import { useDeviceContext } from '../context/DeviceDetection';
import '../styles/Background.css';

const Background = ({ children }) => {
  const { deviceType } = useDeviceContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className={`background-${deviceType}`}>
      <div className="navbar">
        {deviceType !== 'desktop' && (<button onClick={toggleSidebar} className="sidebar-toggle">☰</button>)}
        <div className='navbar-title'><h1>Killian's Club</h1></div>
      </div>

      {/* Sidebar for Desktop or Dropdown for Mobile/Tablet */}
      {(deviceType === 'desktop' || isSidebarOpen) && (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/networking">Networking</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className={`content ${deviceType === 'desktop' ? 'content-desktop' : 'content-mobile'}`}>
        {children}
      </div>
    </div>
  );
};

export default Background;
