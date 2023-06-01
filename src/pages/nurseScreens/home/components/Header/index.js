import React, { useState, useEffect } from 'react';
import logo from './logo/logo1.png'

import './styles.css';

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentDateTime(`${time} ${date}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <header className="header-container">
      <div className="title">
        <h1>DASHBOARD</h1>
        <p> {currentDateTime} </p>
      </div>
      <div className="logo">
        <img src={logo} alt="company-logo" />
      </div>
    </header>
  );
};

export default Header;
