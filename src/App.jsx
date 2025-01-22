import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';

import { DeviceProvider } from './context/DeviceDetection';

const App = () => {
  return (
      <DeviceProvider>
        <Router>
          <Routes />
        </Router>
      </DeviceProvider>
  
  );
};

export default App;