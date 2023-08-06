import React from 'react'
import {AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{flexDirection: 'row'}}>
          
            <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
                <Link to='/' style={{color: "inherit", textDecoration: 'none'}}>Home</Link>
            </Typography>
          
          <Link to='/cart' style={{color: "inherit", textDecoration: 'none'}}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </Link>
      </AppBar>
    </Box>
    <Outlet/>
    </>
  )
}

export default NavBar