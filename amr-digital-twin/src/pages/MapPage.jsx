import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import Scene from '../components/three/Scene';
import { RobotModel } from '../components/three/RobotModel';
import { PointCloud } from '../components/three/PointCloud';


const MapPage = () => {
  const robotPosition = [60, 0, 25]; 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      
      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <Scene>
          <RobotModel 
            modelPath="/tractor.glb"
            position={robotPosition}
            scale={0.02}
            debug={false}
          />
          <PointCloud 
            filePath="/lidar.pcd"
            position={[60, 0, 0]}
            scale={50}
            pointSize={0.5}
            color="#888888"
            debug={false}
          />
        </Scene>
      </Box>
    </Box>
  );
};

export default MapPage;