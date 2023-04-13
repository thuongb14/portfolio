import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Home from "./components/Home";

const App = () => {
  return (
    <div className="h-screen">
      <Home />

      {/* <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact /> */}
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
