import React, { createContext, useContext, useEffect, useState } from 'react';

// Device detection logic
const getDeviceType = () => {
  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();

  if (/mobile|iphone|android/i.test(userAgent) && width < 768) return 'mobile';
  if (/tablet|ipad/i.test(userAgent) || (width >= 768 && width < 1024)) return 'tablet';
  return 'desktop';
};

// Create DeviceContext
const DeviceContext = createContext();

// DeviceContext Provider
export const DeviceProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState(getDeviceType()); // Initialize immediately

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ deviceType }}>
      {children}
    </DeviceContext.Provider>
  );
};

// Custom hook for accessing DeviceContext
export const useDeviceContext = () => useContext(DeviceContext);
