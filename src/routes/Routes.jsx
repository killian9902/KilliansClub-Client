import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import NetworkingPage from '../pages/Networking';

import background from '../components/Background'


import { useDeviceContext } from '../context/DeviceDetection';
import Background from '../components/Background';


const PublicRoutes = () => {
  const { deviceType } = useDeviceContext(); // Get device type

   // Choose background based on device type
   
  return (
    
    <Background>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/networking" element={<NetworkingPage />} />
        </Routes>
    </Background>
    
  );
};

export default PublicRoutes;
