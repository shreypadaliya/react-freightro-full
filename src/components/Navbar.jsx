import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../data/logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTabletOrMobile(window.innerWidth <= 1024); 
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',position:"fixed"}}>
      <Box sx={{ padding: "15px" }}>Home</Box>
      <Box sx={{ padding: "15px" }}>Solution</Box>
      <Box sx={{ padding: "15px" }}>Req A Demo</Box>
      <Button
        sx={{
          paddingInline: "50px",
          backgroundColor: "transparent",
          border: "1px solid yellow",
          color: "white",
          '&:hover': {
            backgroundColor: "transparent",
          },
        }}
      >
        Login
      </Button>
    </Box>
  );

  return (
    <Box>
      <Box
        py="5px"
        sx={{
          position: "fixed",
          top: "0px",
          fontSize: "20px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingInline: { xs: "35px", sm: "35px", md: "55px", lg: "90px" },
          boxSizing: "border-box",
          backgroundColor: isScrolled ? "rgb(26, 49, 54)" : "transparent",
          transition: "background-color 0.3s ease",
          zIndex: 1000,
        }}
      >
        <Box component="img"
          src={logo}
          alt="Logo"
          sx={{
            maxHeight: {
              xs: "50px",  // Small size for extra-small screens
              sm: "50px",  // Small size for small screens
              md: "70px",  // Default size for medium and larger screens
            }
          }} />
        {isTabletOrMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        ) : (
          <Box sx={{ display: "flex" }}>
            {/* <Box sx={{ padding: "15px" }}>Home</Box>
            <Box sx={{ padding: "15px" }}>Solution</Box>
            <Box sx={{ padding: "15px" }}>Req A Demo</Box> */}
            <Link to="/" style={{ textDecoration: 'none', color: 'white', padding: '15px' }}>Home</Link>
            <Link to="/solution" style={{ textDecoration: 'none', color: 'white', padding: '15px' }}>Solution</Link>
            <Link to="/request-demo" style={{ textDecoration: 'none', color: 'white', padding: '15px' }}>Req A Demo</Link>
            <Button
              sx={{
                paddingInline: "50px",
                backgroundColor: "transparent",
                border: "1px solid yellow",
                color: "white",
                '&:hover': {
                  backgroundColor: "transparent",
                },
              }}
            >
              Login
            </Button>
          </Box>
        )}
      </Box>
      {isTabletOrMobile && isMenuOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            color: 'white',
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={toggleMenu}
            sx={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            <CloseIcon />
          </IconButton>
          {menuItems}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
