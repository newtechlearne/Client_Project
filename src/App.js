import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import ProductList from './components/ProductList';
import AddCustomer from './pages/AddCustomer';
import CustomerList from './components/CustomerList';
import AddUser from './pages/AddUser';
import UserList from './components/UserList';
import Menu from './components/Menu';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/add-customer" element={<AddCustomer />} />
                <Route path="/customer-list" element={<CustomerList />} />
         <Route path="/add-user" element={<AddUser />} />
<Route path="/user-list" element={<UserList />} />
            </Routes>
        </Router>
    );
};

export default App;