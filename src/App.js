import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen, ForgotScreen, NurseHomeScreen, PatientListScreen, Appointment, Messages, Notifications, Settings} from './pages';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginScreen setLoggedIn={setLoggedIn} />} />
          <Route path="/forgot" element={<ForgotScreen />} />
          {loggedIn && <Route path="/nurse-home-screen" element={<NurseHomeScreen />} />}
          <Route path="/patient-list" element={<PatientListScreen />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
