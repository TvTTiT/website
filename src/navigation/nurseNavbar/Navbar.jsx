import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBell, faCalendar, faEnvelope, faCog, faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Navbar = () => {
  const navigate = useNavigate(); // Access the navigate function

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <nav className="sidebar-navigation">
      <ul>
        <li className="active" onClick={() => handleNavigation('/nurse-home-screen')}>
          <FontAwesomeIcon icon={faHome} />
          <span className="tooltip">Home</span>
        </li>
        <li className="active" onClick={() => handleNavigation('/patient-list')}>
          <FontAwesomeIcon icon={faUsers} />
          <span className="tooltip">Patient List</span>
        </li>
        <li onClick={() => handleNavigation('/notifications')}>
          <FontAwesomeIcon icon={faBell} />
          <span className="tooltip">Notifications</span>
        </li>
        <li onClick={() => handleNavigation('/appointment-schedule')}>
          <FontAwesomeIcon icon={faCalendar} />
          <span className="tooltip">Appointment Schedule</span>
        </li>
        <li onClick={() => handleNavigation('/messages')}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="tooltip">Messages</span>
        </li>
        <li onClick={() => handleNavigation('/settings')}>
          <FontAwesomeIcon icon={faCog} />
          <span className="tooltip">Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
