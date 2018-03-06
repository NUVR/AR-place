import {
    Scene,
    WebGLRenderer,
    Object3D,
    Camera,
    AmbientLight,
} from 'three';

import mesh from './meshes';
import artoolkit from './artoolkit';

async function setup(containerEl, video, width, height) {
    await artoolkit();
    //const { ARCameraParam, ARController } = window;

    let constraints = {
        audio: false,
        video: {
            facingMode: 'user'
        }
    }

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function success(stream) {
        video.srcObject = stream
    })
    .catch(function(error) {
        alert(error)
    })

    /*if (video === null) {
        video = ARController.getUserMediaThreeScene({
            maxARVideoSize: 320, // do AR processing on scaled down video of this size
            facing: "environment",
            cameraParam: 'static/camera_para.dat',
            onSuccess: function() {
                alert("FUCK")
                // Do nothing
            }
        });
    }

    const scene = new Scene();
    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    containerEl.appendChild(renderer.domElement);
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const camera = new Camera();
    camera.matrixAutoUpdate = false;

    let arController = null;
    const cameraParameters = new ARCameraParam();
    cameraParameters.onload = function() {
        arController = new ARController(width, height, cameraParameters);
        const cameraMatrix = arController.getCameraMatrix();
        camera.projectionMatrix.set(...cameraMatrix);
        camera.projectionMatrix = camera.projectionMatrix.transpose();
    };
    cameraParameters.load('static/camera_para.dat');

    const light = new AmbientLight(0x404040);
    scene.add(light);

    const markerRoot = new Object3D();
    markerRoot.markerMatrix = new Float64Array(12);
    markerRoot.matrixAutoUpdate = false;
    scene.add(markerRoot);

    markerRoot.add(mesh);

    let found = false;

    function render() {
        requestAnimationFrame(render);

        if (arController) {
            arController.detectMarker(video);
            let markerNum = arController.getMarkerNum();
            if (markerNum > 0) {
                if (!found) {
                    arController.getTransMatSquare(0, 1, markerRoot.markerMatrix);
                } else {
                    arController.getTransMatSquareCont(0, 1, markerRoot.markerMatrix, markerRoot.markerMatrix);
                }
                arController.transMatToGLMat(markerRoot.markerMatrix, markerRoot.matrix.elements);
            }

            found = markerNum > 0;
        }

        renderer.render(scene, camera);
    }

    render();*/
}

export { setup };
