import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import Scene from '../components/three/Scene';
import { RobotModel } from '../components/three/RobotModel';

const MapPage = () => {
  const robotPosition = [0, 0, 0]; 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      
      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <Scene>
          <RobotModel 
            modelPath="/robot.glb"
            position={robotPosition}
            scale={1}
            debug={true}
          />
        </Scene>
      </Box>
    </Box>
  );
};

export default MapPage;