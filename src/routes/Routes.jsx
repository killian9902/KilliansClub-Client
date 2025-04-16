import React from 'react';
import { Routes, Route } from 'react-router-dom';

import WelcomePage from '../pages/Welcome';
import InfrastructurePage from '../pages/Infrastructure';
import DataAIStrategyPage from '../pages/DataAIStrategy';
import AIPage from '../pages/AI';
import Background from '../components/Background';

const PublicRoutes = () => {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/data-ai-strategy" element={<DataAIStrategyPage />} />
        <Route path="/ai" element={<AIPage />} />
      </Routes>
    </Background>
  );
};

export default PublicRoutes;
