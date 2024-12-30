import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer added:', customerData);
    alert('Customer added successfully');
  };

  const handleBackToMenu = () => {
    navigate('/navbar');
  };

  return (
    <div className="add-customer">
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Customer name"
          value={customerData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile number"
          value={customerData.mobile}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Customer email"
          value={customerData.email}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Customer address"
          value={customerData.address}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={customerData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={customerData.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={customerData.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={customerData.pincode}
          onChange={handleChange}
        />
        
        <button type="submit">Add Customer</button>
      </form>

      {/* Back to Menu Button */}
      <button onClick={handleBackToMenu}>Back to Menu</button>
    </div>
  );
};

export default AddCustomer;
