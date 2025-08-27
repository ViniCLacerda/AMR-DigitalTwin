import React from 'react';
import { useGLTF } from '@react-three/drei';

export function RobotModel({ modelPath, position, scale }) {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} position={position} scale={scale} />;
}