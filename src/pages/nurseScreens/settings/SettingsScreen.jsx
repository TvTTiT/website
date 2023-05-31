import React from 'react';
import './settingsStyles.css';
import Navbar from '../../../navigation/nurseNavbar/Navbar';
import { FiUser, FiPhone, FiLock } from 'react-icons/fi';

const SettingsScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="settings">
        <h1>Settings</h1>
        <h2>Personal Settings</h2>
        <ul>
          <li>
            <a href="#" className="item">
              <div className="item-icon">
                <FiUser />
              </div>
              <div className="item-content">
                <h3>Personal Details</h3>
                <p>Full name with job title.</p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="item">
              <div className="item-icon">
                <FiPhone />
              </div>
              <div className="item-content">
                <h3>Contact</h3>
                <p>Phone number with email address.</p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="item">
              <div className="item-icon">
                <FiLock />
              </div>
              <div className="item-content">
                <h3>Security</h3>
                <p>Password.</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsScreen;
