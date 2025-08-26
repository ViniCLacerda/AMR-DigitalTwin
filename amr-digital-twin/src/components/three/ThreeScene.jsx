// src/components/three/ThreeScene.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    const gridWidth = 120;
    const gridDepth = 50;
    const boxSize = 1;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    const camera = new THREE.PerspectiveCamera(50, currentMount.clientWidth / currentMount.clientHeight, 1, 1000);
    camera.position.set(gridWidth / 2, 80, 160); 
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(gridWidth / 2, 0, gridDepth / 2);

    const stats = Stats();
    stats.dom.style.position = 'absolute';
    stats.dom.style.top = '0px';
    currentMount.appendChild(stats.dom);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 64, 62);
    scene.add(directionalLight);

    const boxGeometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x0095DD });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    
    boxMesh.position.set(boxSize / 2, boxSize / 2, boxSize / 2);
    scene.add(boxMesh);

    const step = 1;
    const gridColor = new THREE.Color('#f5f5f5');
    
    const points = [];
    // Draw lines along Z axis (from 0 to gridDepth)
    for (let i = 0; i <= gridWidth; i += step) {
      points.push(new THREE.Vector3(i, 0, 0));
      points.push(new THREE.Vector3(i, 0, gridDepth));
    }
    // Draw lines along X axis (from 0 to gridWidth)
    for (let i = 0; i <= gridDepth; i += step) {
      points.push(new THREE.Vector3(0, 0, i));
      points.push(new THREE.Vector3(gridWidth, 0, i));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: gridColor });
    const lineSegments = new THREE.LineSegments(geometry, material);
    scene.add(lineSegments);

    let animationFrameId;
    const animate = () => {
      stats.update();
      controls.update();
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      
      if (currentMount) {
        if (renderer.domElement) currentMount.removeChild(renderer.domElement);
        if (stats.dom) currentMount.removeChild(stats.dom);
      }
      
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh', position: 'relative' }} />;
};

export default ThreeScene;