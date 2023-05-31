import React, { useState } from 'react';
import './patientListStyles.css';
import Navbar from '../../../navigation/nurseNavbar/Navbar';

const PatientListScreen = () => {
  const [patients, setPatients] = useState([
    {
      patient_id: 1,
      first_name: 'John',
      last_name: 'Doe',
      date_of_birth: '1990-01-01',
      gender: 'Male',
      contact_number: '1234567890',
      address: '123 ABC Street',
      email: 'john.doe@example.com',
    },
    {
        patient_id: 2,
        first_name: 'John1',
        last_name: 'Doe1',
        date_of_birth: '1990-02-02',
        gender: 'Male',
        contact_number: '11234567890',
        address: '1123 ABC Street',
        email: '1john.doe@example.com',
    },
    {
        patient_id: 3,
        first_name: 'John2',
        last_name: 'Doe2',
        date_of_birth: '1990-11-11',
        gender: 'Male',
        contact_number: '1234567890',
        address: '123 ABC Street',
        email: 'john.doe@example.com',
      },
      {
          patient_id: 2,
          first_name: 'John1',
          last_name: 'Doe1',
          date_of_birth: '1990-02-02',
          gender: 'Male',
          contact_number: '11234567890',
          address: '1123 ABC Street',
          email: '1john.doe@example.com',
      },
      {
        patient_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1990-01-01',
        gender: 'Male',
        contact_number: '1234567890',
        address: '123 ABC Street',
        email: 'john.doe@example.com',
      },
      {
          patient_id: 2,
          first_name: 'John1',
          last_name: 'Doe1',
          date_of_birth: '1990-02-02',
          gender: 'Male',
          contact_number: '11234567890',
          address: '1123 ABC Street',
          email: '1john.doe@example.com',
      },
      {
        patient_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1990-01-01',
        gender: 'Male',
        contact_number: '1234567890',
        address: '123 ABC Street',
        email: 'john.doe@example.com',
      },
      {
          patient_id: 2,
          first_name: 'John1',
          last_name: 'Doe1',
          date_of_birth: '1990-02-02',
          gender: 'Male',
          contact_number: '11234567890',
          address: '1123 ABC Street',
          email: '1john.doe@example.com',
      },
      {
        patient_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1990-01-01',
        gender: 'Male',
        contact_number: '1234567890',
        address: '123 ABC Street',
        email: 'john.doe@example.com',
      },
      {
          patient_id: 2,
          first_name: 'John1',
          last_name: 'Doe1',
          date_of_birth: '1990-02-02',
          gender: 'Male',
          contact_number: '11234567890',
          address: '1123 ABC Street',
          email: '1john.doe@example.com',
      }
    // Add more patient data objects here...
  ]);
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (column) => {
    if (column === sortColumn) {
      // If the same column is clicked again, reverse the sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Sort by a different column in ascending order by default
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Apply sorting and filtering to the patient list
  let sortedPatients = [...patients];
  if (sortColumn) {
    sortedPatients.sort((a, b) => {
      const columnA = a[sortColumn];
      const columnB = b[sortColumn];
      if (columnA < columnB) return sortOrder === 'asc' ? -1 : 1;
      if (columnA > columnB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }
  const filteredPatients = sortedPatients.filter((patient) =>
    Object.values(patient)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="patient-list-title">
        <h2 className='title'>Patient List</h2>
      </div>
      <div className="patient-list-container">
        <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        <div className="table-container">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th onClick={() => handleSort('patient_id')}>
                  Patient ID {sortColumn === 'patient_id' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'patient_id' && sortOrder === 'desc' && '▼'}
                </th>
                <th onClick={() => handleSort('first_name')}>
                  First Name {sortColumn === 'first_name' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'first_name' && sortOrder === 'desc' && '▼'}
                </th>
                <th onClick={() => handleSort('last_name')}>
                  Last Name {sortColumn === 'last_name' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'last_name' && sortOrder === 'desc' && '▼'}
                </th>
                <th onClick={() => handleSort('date_of_birth')}>
                  Date of Birth {sortColumn === 'date_of_birth' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'date_of_birth' && sortOrder === 'desc' && '▼'}
                </th>
                <th onClick={() => handleSort('gender')}>
                  Gender {sortColumn === 'gender' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'gender' && sortOrder === 'desc' && '▼'}
                </th>
                <th onClick={() => handleSort('contact_number')}>
                  Contact Number {sortColumn === 'contact_number' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'contact_number' && sortOrder === 'desc' && '▼'}
                </th>
                <th onClick={() => handleSort('address')}>
                  Address {sortColumn === 'address' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'address' && sortOrder === 'desc' && '▼'}
                </th>
                <th onClick={() => handleSort('email')}>
                  Email {sortColumn === 'email' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'email' && sortOrder === 'desc' && '▼'}
                </th>
                <th>Medication</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.patient_id}>
                    <td>{patient.patient_id}</td>
                    <td>{patient.first_name}</td>
                    <td>{patient.last_name}</td>
                    <td>{patient.date_of_birth}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.contact_number}</td>
                    <td>{patient.address}</td>
                    <td>{patient.email}</td>
                    <td>
                      <button className="btn btn-primary">Medication</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="empty-message">
                    <h2>No patients found.</h2>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientListScreen;