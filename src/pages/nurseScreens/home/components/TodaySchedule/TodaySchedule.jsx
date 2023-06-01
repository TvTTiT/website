import { React, useState } from 'react'
import './todaySchedule.css'

function TodaySchedule() {
    const [appointment, setAppointment] = useState([
        {
            appointment: 1,
            first_name: 'John',
            last_name: 'Doe',
            Time: '9:00:00',
            Email: 'john.doe@example.com',
            Phone: '11234567890',
        },
        {
            appointment: 2,
            first_name: 'John1',
            last_name: 'Doe1',
            Time: '9:30:00',
            Email: '1john.doe@example.com',
            Phone: '11234567890',
        },
        {
            appointment: 3,
            first_name: 'John2',
            last_name: 'Doe2',
            Time: '10:30:00',
            Phone: '11234567890',
        },])
    const today = new Date().toLocaleDateString('pt-BR');

    const todayAppointment = appointment.filter(
        (patient) => new Date().toLocaleDateString('pt-BR') === today);
  return (
      <div>
          <h3 className='title' style={{ padding: '20px' }}>Today Schedule </h3>
          <table className="appointment-table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Patient Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
      {todayAppointment.map((patient) => (
            <tr key={patient.patient_id}>
              <td>{new Date().toLocaleDateString('pt-BR')}</td>
              <td>{patient.Time}</td>
              <td>{`${patient.first_name} ${patient.last_name}`}</td>
              <td>{patient.Email}</td>
              <td>{patient.Phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
  )
}

export default TodaySchedule