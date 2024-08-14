import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Libraries from './pages/Libraries';
import Checkout from './pages/Checkout'; 
import MarqueeText from './MarqueeText';
import Footer from './Footer';
import Artist from './pages/Artist';

function App() {
  return (
    <Router>
      <div className="bg-white shadow-md fixed top-0 w-full z-50">
        <nav className="container mx-auto p-4 flex justify-between items-center bg-white">
          <div className="text-3xl font-bold">
            <Link to="/" className="text-black">Hanmant Lohar</Link>
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-lg font-semibold text-black hover:bg-cyan-200">Home</Link>
            </li>
            <li>
              <Link to="/libraries" className="text-lg font-semibold text-black hover:bg-cyan-200">Artworks</Link>
            </li>
          </ul>
        </nav>
        {/* MarqueeText Component */}
        <div className="mt-0 font-medium text-base"> {/* Remove any margin */}
          <MarqueeText text="visit ARTWORKS section to see more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        </div>
      </div>

      <div className="pt-24"> {/* Adjust padding to prevent content from hiding behind the fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/artist" element={<Artist />} /> 
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
