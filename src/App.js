
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AboutUs from './pages/aboutus/AboutUs';
import Photos from './pages/photos/Photos';
import Wedding from './pages/wedding/Wedding';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
          <Route path="/wedding" element={<Wedding />}></Route>
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
