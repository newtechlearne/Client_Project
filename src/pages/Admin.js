import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [adminData, setAdminData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminData = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                navigate('/login');
            }

            try {
                const response = await axios.get('/api/admin', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAdminData(response.data);
            } catch (err) {
                setError('You are not authorized to access this page.');
                navigate('/');
            }
        };

        fetchAdminData();
    }, [navigate]);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {error && <p>{error}</p>}
            {adminData ? (
                <div>
                    <h3>Welcome Admin</h3>
                    {/* Render admin-specific data here */}
                    <p>{adminData.info}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Admin;
