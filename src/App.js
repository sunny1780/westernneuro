import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
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
import EEGtesting from './pages/EEGTesting';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient-information" element={<PatientInformation />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/epilepsy" element={<Service1 />} />
          <Route path="/services/headaches" element={<Service2 />} />
          <Route path="/services/neuromuscular-disorders" element={<Service3 />} />
          <Route path="/services/nerve-conduction-studies" element={<Service4 />} />
          <Route path="/services/sleep-disorders" element={<Service5 />} />
          <Route path="/services/eeg-testing" element={<EEGtesting />} />
          <Route path="/about" element={<AboutWesternNeurologicalAssociates />} />
          <Route path="/about/doctor-faisal" element={<AboutDoctorFaisal />} />
          <Route path="/facility-tour" element={<FacilityTour />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
