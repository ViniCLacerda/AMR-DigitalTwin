import React from 'react';
import { useGLTF } from '@react-three/drei';

export function RobotModel({ 
  modelPath, 
  position, 
  scale, 
  pitch = 0, 
  yaw = 0, 
  roll = 0, 
}) {
  
  const rotationInRadians = [
    pitch * (Math.PI / 180),
    yaw * (Math.PI / 180),
    roll * (Math.PI / 180)
  ];

  const { scene } = useGLTF(modelPath);
  
  return (
    <primitive 
      object={scene.clone()} 
      position={position} 
      scale={scale} 
      rotation={rotationInRadians} 
    />
  );
}