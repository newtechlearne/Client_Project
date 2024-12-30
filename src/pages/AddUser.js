import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [userData, setUserData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    departmentId: '', // department field
  });

  const [departments, setDepartments] = useState([]); // state for departments list

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch departments from the server or state
    const fetchDepartments = async () => {
      // For now, adding static departments
      setDepartments([
        { id: '1', name: 'HR' },
        { id: '2', name: 'Finance' },
        { id: '3', name: 'IT' },
      ]);
    };

    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User added:', userData);
    alert('User added successfully');
  };

  const handleBackToMenu = () => {
    navigate('/navbar');
  };

  return (
    <div className="add-user">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Customer name"
          value={userData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile number"
          value={userData.mobile}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Customer email"
          value={userData.email}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Customer address"
          value={userData.address}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={userData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={userData.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={userData.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={userData.pincode}
          onChange={handleChange}
        />

        {/* Department dropdown */}
        <select
          name="departmentId"
          value={userData.departmentId}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </select>

        <button type="submit">Add User</button>
      </form>

      {/* Back to Menu Button */}
      <button onClick={handleBackToMenu}>Back to Menu</button>
    </div>
  );
};

export default AddUser;
