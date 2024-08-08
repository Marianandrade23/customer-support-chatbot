'use client';

import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import Navbar from '../app/navbar/Navbar';
import Footer from '../app/footer/Footer';

const ButtonContainer = styled(Box)(() => ({
  marginTop: '16px',
}));

const LandingPage = () => {
  return (
    <Box className="main-container">
      <Navbar />
      <Box className="content-container">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the Headstarter Customer Support AI
        </Typography>
        <Typography variant="h5" component="h2" paragraph>
          Our mission is to provide assistance to users preparing for interviews
          through our platform, which offers mock technical interviews powered
          by AI.
        </Typography>
        <ButtonContainer>
          <Link href="/register" passHref>
            <Button
              variant="contained"
              sx={{ marginRight: 2, backgroundColor: '#95989c', fontSize: 20 }}
            >
              Register
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#95989c', fontSize: 20 }}
            >
              Log In
            </Button>
          </Link>
        </ButtonContainer>
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
