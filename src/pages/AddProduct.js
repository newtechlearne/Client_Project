import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/product/add', { name, description, price });
      alert('Product added successfully');
      setName('');
      setDescription('');
      setPrice('');
    } catch (err) {
      console.error(err);
    }
  };

  // Handle the navigation to the menu page
  const handleBackToMenu = () => {
    navigate('/navbar'); // Navigate to the /menu route
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Back to Menu Button */}
      <button onClick={handleBackToMenu}>Back to Menu</button>
    </div>
  );
};

export default AddProduct;
