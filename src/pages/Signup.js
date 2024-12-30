import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path to where your Navbar component is located
import Menu from '../components/Menu'; // Adjust the path to where your Menu component is located
import { Button, TextField, Checkbox, FormControlLabel, Typography, Paper, Grid } from '@mui/material';

function SignupLogin() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // New state for admin
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // New state to hold logged-in user data

  // Simulating a users database in localStorage
  const usersDatabase = JSON.parse(localStorage.getItem('usersDatabase')) || {};

  const handleSignup = () => {
    if (!email || !password || !confirmPassword || !name) {
      setMessage('All fields are required for signup.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    if (usersDatabase[email]) {
      setMessage('An account with this email already exists.');
      return;
    }

    usersDatabase[email] = { password, name, isAdmin }; // Save the admin status
    localStorage.setItem('usersDatabase', JSON.stringify(usersDatabase));
    setMessage('Signup successful! Logging you in...');
    setIsLoggedIn(true);
    setLoggedInUser({ email, name, isAdmin });
  };

  const handleLogin = () => {
    if (!email || !password) {
      setMessage('Email and password are required for login.');
      return;
    }

    if (usersDatabase[email] && usersDatabase[email].password === password) {
      setIsLoggedIn(true);
      setLoggedInUser(usersDatabase[email]); // Set logged-in user data
      setMessage('Login successful! Welcome, ' + usersDatabase[email].name);
    } else {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null); // Clear logged-in user data
    setMessage('You have logged out successfully.');
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar isAdmin={loggedInUser.isAdmin} />
          <Menu />
          <Button
            onClick={handleLogout}
            variant="contained"
            color="primary"
            style={{ margin: '20px' }}
          >
            Logout
          </Button>
        </>
      ) : (
        <Grid container justifyContent="center" style={{ padding: '20px' }}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" align="center" color="primary">
                {isSignup ? 'Signup' : 'Login'}
              </Typography>
              {isSignup ? (
                <div>
                  <TextField
                    label="Enter your name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
                  <TextField
                    label="Enter your email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
                  <TextField
                    label="Enter your password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
                  <TextField
                    label="Confirm your password"
                    type="password"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isAdmin}
                        onChange={() => setIsAdmin(!isAdmin)}
                        color="primary"
                      />
                    }
                    label="Are you an Admin?"
                  />
                  <Button
                    onClick={handleSignup}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={{ marginTop: '20px' }}
                  >
                    Signup
                  </Button>
                  <Typography variant="body2" align="center" color="textSecondary" style={{ marginTop: '15px' }}>
                    Already have an account?{' '}
                    <span
                      style={{ color: '#007BFF', cursor: 'pointer' }}
                      onClick={() => setIsSignup(false)}
                    >
                      Login here
                    </span>
                  </Typography>
                </div>
              ) : (
                <div>
                  <TextField
                    label="Enter your email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
                  <TextField
                    label="Enter your password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
                  <Button
                    onClick={handleLogin}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={{ marginTop: '20px' }}
                  >
                    Login
                  </Button>
                  <Typography variant="body2" align="center" color="textSecondary" style={{ marginTop: '15px' }}>
                    Don't have an account?{' '}
                    <span
                      style={{ color: '#007BFF', cursor: 'pointer' }}
                      onClick={() => setIsSignup(true)}
                    >
                      Signup here
                    </span>
                  </Typography>
                </div>
              )}
              <Typography variant="body2" align="center" color="textSecondary" style={{ marginTop: '15px' }}>
                {message}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default SignupLogin;
