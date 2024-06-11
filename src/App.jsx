import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register/Register';
import OtpVerification from './components/Register/OtpVerification';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='otpVerification' element={<OtpVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
