import React from 'react';

import { FaHeartbeat } from 'react-icons/fa';
import { GiLungs } from 'react-icons/gi';
import { WiThermometer } from 'react-icons/wi';

import './styles.css';
const FrontCard = () => {
  return (
    <div className="front">
      <h1>Patient name</h1>
      <div className="content">
        <div className="sensor-info">
          <FaHeartbeat className= "sensor-icon" size={32}/>
          <p>90 bpm</p>
        </div>
        <div className="sensor-info">
          <GiLungs  className= "sensor-icon" size={32}/>
          <p>93%</p>
        </div>
        <div className="sensor-info">
          <WiThermometer  className= "sensor-icon" size={32} />
          <p>36ºC</p>
          </div>
        </div>
    </div>
  );
};

export default FrontCard;
