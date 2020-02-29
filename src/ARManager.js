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

const ARManager = {
  init() {
    this.render = this.render.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);

    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x333333, 0);
    this.renderer.setSize(640, 480);
    document.querySelector('#rendererContainer').appendChild(this.renderer.domElement);

    this.scene = new Scene();
    this.scene.visible = false;
    this.camera = new Camera();
    this.scene.add(this.camera);

    const arToolkitSource = new ArToolkitSource({ sourceType: 'webcam' });
    const arToolkitContext = new ArToolkitContext({
      cameraParametersUrl: 'camera_para.dat',
      detectionMode: 'mono',
    });
    const markerControls = new ArMarkerControls(arToolkitContext, this.camera, {
      type: 'pattern',
      patternUrl: 'patt.hiro',
      changeMatrixMode: 'cameraTransformMatrix',
    });

    arToolkitSource.init(() => {
      setTimeout(this.resizeHandler, 1000);
    });
    arToolkitContext.init(() => {
      this.camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    window.addEventListener('resize', this.resizeHandler);

    const geometry = new CubeGeometry(1, 1, 1);
    const material = new MeshNormalMaterial({ transparent: true, opacity: 0.5, side: DoubleSide });
    const mesh = new Mesh(geometry, material);
    mesh.position.y = geometry.parameters.height / 2;
    this.scene.add(mesh);

    this._arToolkitSource = arToolkitSource;
    this._arToolkitContext = arToolkitContext;
    this._markerControls = markerControls;
  },

  render() {
    this.renderer.render(this.scene, this.camera);

    if (this._arToolkitSource.ready) {
      this._arToolkitContext.update(this._arToolkitSource.domElement);
      this.scene.visible = this.camera.visible;
    }

    if (this.shouldRender) {
      requestAnimationFrame(this.render);
    }
  },

  resizeHandler() {
    this._arToolkitSource.onResizeElement();
    this._arToolkitSource.copyElementSizeTo(this.renderer.domElement);
    if (this._arToolkitContext.arController !== null) {
      this._arToolkitSource.copyElementSizeTo(this._arToolkitContext.arController.canvas);
    }
  },

  startRendering() {
    this.shouldRender = true;
    requestAnimationFrame(this.render);
  },
  stopRendering() {
    this.shouldRender = false;
  },
};

export default ARManager;
