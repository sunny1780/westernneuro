import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import PatientInformation from './pages/PatientInformation';
import Blogs from './pages/Blogs';
import BookAppointment from './pages/BookAppointment';
import Services from './pages/Services';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import Service4 from './pages/Service4';
import Service5 from './pages/Service5';
import AboutWesternNeurologicalAssociates from './pages/AboutWesternNeurologicalAssociates';
import AboutDoctorFaisal from './pages/AboutDoctorFaisal';
import FacilityTour from './pages/FacilityTour';

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
          <Route path="/services/1" element={<Service1 />} />
          <Route path="/services/2" element={<Service2 />} />
          <Route path="/services/3" element={<Service3 />} />
          <Route path="/services/4" element={<Service4 />} />
          <Route path="/services/5" element={<Service5 />} />
          <Route path="/about" element={<AboutWesternNeurologicalAssociates />} />
          <Route path="/about/doctor-faisal" element={<AboutDoctorFaisal />} />
          <Route path="/facility-tour" element={<FacilityTour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
