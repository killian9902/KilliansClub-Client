import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import NetworkingPage from '../pages/Networking';
import Background from '../components/Background';

const PublicRoutes = () => {
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
