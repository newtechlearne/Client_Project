import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <List>
      <ListItem button>
        <Link to="/navbar" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem button>
        <Link to="/add-product" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemText primary="Add Product" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/product-list" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemText primary="Product List" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/add-customer" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemText primary="Add Customer" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/customer-list" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemText primary="Customer List" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/add-user" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemText primary="Add User" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/user-list" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItemText primary="User List" />
        </Link>
      </ListItem>
    </List>
  );
};

export default Menu;
