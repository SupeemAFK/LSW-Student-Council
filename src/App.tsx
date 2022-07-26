import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Members from './components/Members'
import Policy from './components/Policy'
import News from './components/News'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="policy" element={<Policy />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
