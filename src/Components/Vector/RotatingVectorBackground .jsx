import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingVectorBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
      // Set up the scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);
  
      // Create the hexagon geometry
      const geometry = new THREE.ExtrudeGeometry(
        new THREE.Shape([
          new THREE.Vector2(-1, -1 / Math.sqrt(3)),
          new THREE.Vector2(0, 2 / Math.sqrt(3)),
          new THREE.Vector2(1, -1 / Math.sqrt(3)),
          new THREE.Vector2(1, 1 / Math.sqrt(3)),
          new THREE.Vector2(0, 1),
          new THREE.Vector2(-1, 1 / Math.sqrt(3)),
        ]),
        { depth: 1, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.5, bevelThickness: 0.5 }
      );
  
      // Create the hexagon material
      const material = new THREE.MeshBasicMaterial({ color: 0x4a4a4a, wireframe: true });
  
      // Create the hexagon mesh and add it to the scene
      const hexagon = new THREE.Mesh(geometry, material);
      scene.add(hexagon);
  
      // Set the camera position
      camera.position.z = 5;
  
      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        hexagon.rotation.x += 0.01;
        hexagon.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
  
      animate();
  
      // Clean up
      return () => {
        containerRef.current.removeChild(renderer.domElement);
      };
    }, []);
  
    return <div ref={containerRef} />;
  };
export default RotatingVectorBackground;