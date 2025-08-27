// src/components/three/PointCloud.jsx
import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import * as THREE from 'three';

export function PointCloud({ filePath, position, scale, color, pointSize, debug = false }) {

  const debugGeometry = useMemo(() => {
    const points = [];
    for (let i = 0; i < 100; i++) {
      points.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  const loadedPoints = useLoader(PCDLoader, filePath);

  const clonedGeometry = useMemo(() => loadedPoints.geometry.clone(), [loadedPoints]);


  if (debug) {
    return (
      <points position={position} scale={scale} geometry={debugGeometry}>
        <pointsMaterial color="red" size={0.5} />
      </points>
    );
  }

  return (
    <points position={position} scale={scale} geometry={clonedGeometry}>
      <pointsMaterial color={color} size={pointSize} />
    </points>
  );
}