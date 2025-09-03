import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import * as THREE from 'three';

export function PointCloud({ 
  filePath, 
  position, 
  scale, 
  color, 
  pointSize, 
  pitch = 0, 
  yaw = 0, 
  roll = 0 
}) {
  const loadedPoints = useLoader(PCDLoader, filePath);
  const clonedGeometry = useMemo(() => loadedPoints.geometry.clone(), [loadedPoints]);

  const rotationInRadians = [
    pitch * (Math.PI / 180),
    yaw * (Math.PI / 180),
    roll * (Math.PI / 180)
  ];

  return (
    <points 
      position={position} 
      scale={scale} 
      rotation={rotationInRadians}
      geometry={clonedGeometry}
    >
      <pointsMaterial color={color} size={pointSize} />
    </points>
  );
}
