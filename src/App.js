import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import PatientInformation from './pages/PatientInformation';
import Blogs from './pages/Blogs';
import BookAppointment from './pages/BookAppointment';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient-information" element={<PatientInformation />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
