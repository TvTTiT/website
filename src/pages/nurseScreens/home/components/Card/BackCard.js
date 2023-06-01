import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { GiLungs } from 'react-icons/gi';
import { WiThermometer } from 'react-icons/wi';
import {FiClock}  from 'react-icons/fi'
import './styles.css';

const hardcodedReports = [
  {
    timestamp: "2023-05-30T10:30:00.000Z",
    beat: 80,
    spo2: 98,
    temp: 36.5,
  },
  {
    timestamp: "2023-05-30T11:15:00.000Z",
    beat: 75,
    spo2: 97,
    temp: 36.7,
  },
  // Add more objects as needed
];

const BackCard = () => {

  return (
    <div className="back">
      <h1>Patient Name</h1>
      <table className="sensor-statistics-table">
        <tbody>
        <tr>
              <th className="sensor-data-col">
                <FiClock size={22} title="Time" />
              </th>
              <th className="sensor-data-col">
                <FaHeartbeat size={22} title="Heart beat" />
              </th>
              <th className="sensor-data-col">
                <GiLungs size={22} title="SpO2" />
              </th>
              <th className="sensor-data-col">
                <WiThermometer size={22} title="Temperature" />
              </th>
            </tr>
          <tr>
            <td className="sensor-data-col"> 08:18:18 </td>
            <td className="sensor-data-col"> 96 bpm</td>
            <td className="sensor-data-col"> 90%</td>
            <td className="sensor-data-col"> 36.2 °C</td>
          </tr>
          <tr>
            <td className="sensor-data-col"> 09:18:18 </td>
            <td className="sensor-data-col"> 110 bpm</td>
            <td className="sensor-data-col"> 95%</td>
            <td className="sensor-data-col"> 36.5 °C</td>
          </tr>
          <tr>
            <td className="sensor-data-col"> 10:18:18 </td>
            <td className="sensor-data-col"> 100 bpm</td>
            <td className="sensor-data-col"> 94%</td>
            <td className="sensor-data-col"> 36.8 °C</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BackCard;
