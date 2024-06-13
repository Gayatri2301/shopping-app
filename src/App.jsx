import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register/Register';
import OtpVerification from './components/Register/OtpVerification';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ForgotPassword/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './utils/auth';
<<<<<<< HEAD
import NotFound from './components/NotFound';
=======
import PrivateRouteLayout from './utils/PrivateLayout';
import NotFound from './components/NotFound';
import OtpLayout from './utils/OtpLayout';
import ResetLayout from './utils/ResetLayout';
>>>>>>> 4eb83a2b1ac4b007bf5a71472d65e0ca03b3cb36

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes  */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
<<<<<<< HEAD
        <Route path='otpVerification' element={<OtpVerification />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />   
        <Route path='/ResetPassword' element={<ResetPassword />} />
        <Route path='/profile' element={<Dashboard />} />
        <Route path='*' element={<NotFound/>}/>
=======
        <Route path='/forgotPassword' element={<ForgotPassword />} />

        {/* Private Routes  */}
        <Route element={<PrivateRouteLayout />}>
          <Route path='/profile' element={<Dashboard />} />
        </Route>
        <Route element={<OtpLayout />}>
          <Route path='otpVerification' element={<OtpVerification />} />
        </Route>
        <Route element={<ResetLayout />}>
          <Route path='/ResetPassword' element={<ResetPassword />} />
        </Route>

        <Route path='*' element={<NotFound />} />
>>>>>>> 4eb83a2b1ac4b007bf5a71472d65e0ca03b3cb36
      </Routes>
    </Router>
  );
}

export default App;
