import React from 'react';
import { useGLTF } from '@react-three/drei';

export function RobotModel({ modelPath, position, scale, debug = false }) {
  if (debug) {
    return (
      <mesh position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
        <axesHelper args={[2]} />
      </mesh>
    );
  }

  const { scene } = useGLTF(modelPath);
  
  return <primitive object={scene.clone()} position={position} scale={scale} />;
}