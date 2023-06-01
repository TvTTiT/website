import React from 'react';
import Navbar from '../../../navigation/nurseNavbar/Navbar';
import Card from './components/Card';
import Header from './components/Header';
import TodaySchedule from './components/TodaySchedule/TodaySchedule';
import './nurseHomeStyles.css'

const NurseHomeScreen1 = () => {
  return (
    <div className="container-nurse">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="card-group">
          <Card />
          <Card />
          <Card />  
          <Card />  
          <Card /> 
          <Card /> 
          <Card /> 
          <Card /> 
          <Card /> 
        </div>
        <div className="today-schedule">
            <TodaySchedule />
        </div>
      </div>
    </div>  
  );
};


export default NurseHomeScreen1;
