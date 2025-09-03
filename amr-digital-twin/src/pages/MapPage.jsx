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
          />
          <PointCloud 
            filePath="/test.pcd"
            position={[60, 0, 37]}
            scale={1.5}
            pointSize={0.2}
            color="#0864ac"
            pitch={-90} 
            yaw={0}
            roll={55}
          />
        </Scene>
      </Box>
    </Box>
  );
};

export default MapPage;