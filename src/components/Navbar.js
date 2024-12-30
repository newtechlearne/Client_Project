// Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Menu from './Menu'; // Import the Menu component

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to toggle the Drawer open/close
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        {/* Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        {/* Website Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            MyWebsite
          </Link>
        </Typography>
      </Toolbar>

      {/* Drawer for Menu */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250, // Customize the width of the drawer
            backgroundColor: '#333', // Drawer background color
            color: 'white', // Drawer text color
          },
        }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Menu /> {/* Render the Menu component inside Drawer */}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
