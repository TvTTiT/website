import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen, ForgotScreen, NurseScreen } from './pages';

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
          {loggedIn && <Route path="/nurse" element={<NurseScreen />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
