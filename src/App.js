import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Button, CssBaseline } from '@mui/material';
import Header from './layout/Header';
import Footer from './layout/Footer';
import OurProduct from './pages/OurProduct';
import Academy from './pages/Academy';
import background from './assets/bg.svg';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Btrace from './pages/Btrace';
import Api from './pages/Api';
import Bholder from './pages/Bholder';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Header />
        <Box sx={{ px: { lg: '40px', md: '20px', xs: '0'}, color: 'white' ,minHeight: '50vh',pt:{md:9,xs:8} }}>
          <Routes>
          <Route index element={<OurProduct />} />
            <Route path="/Bholder" element={<Bholder />} />
            <Route path="/OurProduct" element={<OurProduct />} />
            <Route path="/Academy" element={<Academy />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Btrace" element={<Btrace />} />
            <Route path="/Api" element={<Api />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
