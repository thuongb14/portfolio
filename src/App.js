import React from 'react';
// components
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="h-screen ">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
};

export default App;
