import {
    Scene, WebGLRenderer,
    Color, PerspectiveCamera,
    AmbientLight, PointLight,
} from 'three';

import { mesh } from './meshes.js';

function setup(containerEl, width, height) {
    const scene = new Scene();
    scene.background = new Color(0x000000);
    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    containerEl.appendChild(renderer.domElement);
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const camera = new PerspectiveCamera(75, width / height, 0.1, 10000);
    camera.position.set(4, 4, 4);
    camera.lookAt(scene.position);

    const light = new AmbientLight(0x404040);
    scene.add(light);

    const ptLight = new PointLight(0xffffff);
    ptLight.position.set(4, 4, 4);
    scene.add(ptLight);

    scene.add(mesh);

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();
}

export { setup };
