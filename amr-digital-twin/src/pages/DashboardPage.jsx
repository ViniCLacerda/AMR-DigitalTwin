// src/pages/DashboardPage.jsx
import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import ThreeScene from '../components/three/ThreeScene';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <ThreeScene />
      </Box>
    </Box>
  );
};

export default DashboardPage;