import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';

const Scene = ({ children }) => {
  const gridWidth = 120;
  const gridDepth = 50;
  const gridColor = '#fff';
  const lineThickness = 0.7;

  return (
    <Canvas camera={{ position: [gridWidth / 2, 40, 60], fov: 80 }}>
      <color attach="background" args={['white']} />

      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 64, 62]} intensity={1} />

      <Grid
        position={[gridWidth / 2, 0, gridDepth / 2]}
        args={[gridWidth, gridDepth]}
        cellSize={1}
        cellThickness={lineThickness}
        cellColor={gridColor}
        sectionSize={1}
        sectionThickness={lineThickness}
        sectionColor={gridColor}
        followCamera={false}
        infiniteGrid={false}
      />
      
      <OrbitControls target={[gridWidth / 2, 0, gridDepth / 2]} />

      <Suspense fallback={null}>
        {children}
      </Suspense>
    </Canvas>
  );
};

export default Scene;