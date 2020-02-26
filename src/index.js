import {
  Camera,
  CubeGeometry,
  DoubleSide,
  Mesh,
  MeshNormalMaterial,
  Scene,
  WebGLRenderer,
} from 'three';

import { ArMarkerControls, ArToolkitContext, ArToolkitSource } from './arjs-shim';

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x333333, 0);
  renderer.setSize(640, 480);
  document.querySelector('#rendererContainer').appendChild(renderer.domElement);

  const scene = new Scene();
  const camera = new Camera();
  scene.add(camera);

  const arToolkitSource = new ArToolkitSource({ sourceType: 'webcam' });
  const arToolkitContext = new ArToolkitContext({
    cameraParametersUrl: 'camera_para.dat',
    detectionMode: 'mono',
  });
  // eslint-disable-next-line no-unused-vars
  const markerControls = new ArMarkerControls(arToolkitContext, camera, {
    type: 'pattern',
    patternUrl: 'patt.hiro',
    changeMatrixMode: 'cameraTransformMatrix',
  });
  scene.visible = false;

  const resize = () => {
    arToolkitSource.onResizeElement();
    arToolkitSource.copyElementSizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
    }
  };

  arToolkitSource.init(() => {
    setTimeout(resize, 1000);
  });
  arToolkitContext.init(() => {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  window.addEventListener('resize', resize);

  const geometry = new CubeGeometry(1, 1, 1);
  const material = new MeshNormalMaterial({ transparent: true, opacity: 0.5, side: DoubleSide });
  const mesh = new Mesh(geometry, material);
  mesh.position.y = geometry.parameters.height / 2;
  scene.add(mesh);

  const render = () => {
    renderer.render(scene, camera);

    if (arToolkitSource.ready) {
      arToolkitContext.update(arToolkitSource.domElement);
      scene.visible = camera.visible;
    }

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
});
