import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HTMLFileRenderer from './components/HTMLFileRenderer';
import AboutUS from './components/AboutUS';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUS/>} />
      </Routes>
    </>
  );
}

export default App;
