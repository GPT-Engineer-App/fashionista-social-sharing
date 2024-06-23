import React, { useEffect } from 'react';
import { Box, Text, VStack } from "@chakra-ui/react";
import * as THREE from 'three';
import 'ar.js';

const VirtualTryOn = () => {
  useEffect(() => {
    // Initialize AR.js and Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const arToolkitSource = new THREEx.ArToolkitSource({
      sourceType: 'webcam',
    });

    arToolkitSource.init(() => {
      setTimeout(() => {
        onResize();
      }, 2000);
    });

    const arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: 'data/camera_para.dat',
      detectionMode: 'mono',
    });

    arToolkitContext.init(() => {
      camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    const onResize = () => {
      arToolkitSource.onResizeElement();
      arToolkitSource.copyElementSizeTo(renderer.domElement);
      if (arToolkitContext.arController !== null) {
        arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
      }
    };

    window.addEventListener('resize', onResize);

    const animate = () => {
      requestAnimationFrame(animate);
      if (arToolkitSource.ready !== false) {
        arToolkitContext.update(arToolkitSource.domElement);
      }
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Virtual Try-On</Text>
        <Text>Use your camera to try on fashion items in AR.</Text>
        <div id="ar-container"></div>
      </VStack>
    </Box>
  );
};

export default VirtualTryOn;