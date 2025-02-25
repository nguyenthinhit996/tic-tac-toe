import './css/bundle';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import { IMAGE } from './utils/common';
import RouterManagement from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <img className="title-logo" alt="" src={IMAGE.TitleLogo} />
      <RouterManagement />
    </BrowserRouter>
  );
}

export default App;
