import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ARjs } from 'ar.js';

const VirtualTryOn = () => {
  const arContainer = useRef(null);

  useEffect(() => {
    if (arContainer.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.Camera();
      scene.add(camera);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      arContainer.current.appendChild(renderer.domElement);

      const arToolkitSource = new ARjs.Source({
        sourceType: 'webcam',
      });

      const arToolkitContext = new ARjs.Context({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono',
      });

      arToolkitSource.init(() => {
        setTimeout(() => {
          arToolkitSource.onResizeElement();
          arToolkitSource.copyElementSizeTo(renderer.domElement);
          if (arToolkitContext.arController !== null) {
            arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
          }
        }, 2000);
      });

      arToolkitContext.init(() => {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
      });

      const onRenderFcts = [];
      onRenderFcts.push(() => {
        if (arToolkitSource.ready === false) return;
        arToolkitContext.update(arToolkitSource.domElement);
        scene.visible = camera.visible;
      });

      onRenderFcts.push(() => {
        renderer.render(scene, camera);
      });

      const animate = () => {
        requestAnimationFrame(animate);
        onRenderFcts.forEach((onRenderFct) => {
          onRenderFct();
        });
      };

      animate();
    }
  }, []);

  return <div ref={arContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default VirtualTryOn;