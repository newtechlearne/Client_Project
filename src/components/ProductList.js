import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/product', {
          params: { page, search: searchTerm, sortBy, sortOrder }
        });
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [page, searchTerm, sortBy, sortOrder]);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handlePageChange = (newPage) => setPage(newPage);
  const handleSortChange = (e) => setSortBy(e.target.value);
  const handleSortOrderChange = (e) => setSortOrder(e.target.value);

  // Handle the navigation to the menu page
  const handleBackToMenu = () => {
    navigate('/navbar'); // Navigate to the /menu route
  };

  return (
    <div>
      <h2>Product List</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search Products" />
      <select onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <select onChange={handleSortOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>

      <br />
      <button onClick={handleBackToMenu}>Back to Menu</button> {/* Back to Menu Button */}
    </div>
  );
};

export default ProductList;
