import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register/Register';
import OtpVerification from './components/Register/OtpVerification';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ForgotPassword/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './utils/auth';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='otpVerification' element={<OtpVerification />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />   
        <Route path='/ResetPassword' element={<ResetPassword />} />
        <Route path='/profile' element={<Dashboard />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
