import init from './playcanvas';

async function setup(canvas, width, height) {

    const pc = window.pc;
    if (height) {
        height = 'auto'
    }

    // Create the canvas for our application
    canvas.style.position = "absolute";
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    document.body.appendChild(canvas);

    // Create the application and start the update loop
    let app = new pc.Application(canvas);
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);
    app.start();

    // Lift scene ambient lighting up from black
    app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);

    // Load PlayCanvas-AR
    await init();

    // Create the AR-enabled camera using generic camera calibration settings
    app.assets.loadFromUrl("../static/camera_para.dat", "binary", function (err, asset) {

        if (err) {
            alert(err)
        }

        var camera = new pc.Entity("AR Camera");
        camera.addComponent("camera", {
            clearColor: new pc.Color(0, 0, 0, 0)
        });
        camera.addComponent("script");
        camera.script.create("arCamera", {
            attributes: {
                cameraCalibration: asset,
                detectionMode: 1,     // Mono template
                labelingMode: 1,      // Black Region
                processingMode: 0,    // Frame
                thresholdMode: 0,     // Manual
                threshold: 100,
                trackerResolution: 0, // Full
                trackAlternateFrames: false,
                debugOverlay: false,
                videoTexture: false
            }
        });
        app.root.addChild(camera);
    });

    // Load the Hiro marker pattern and create a marker entity with it
    app.assets.loadFromUrl("../static/markers/hiro.patt", "binary", function (err, asset) {

        if (err) {
            alert(err)
        }

        var hiro = new pc.Entity("Hiro Marker");
        hiro.addComponent("script");
        hiro.script.create("arMarker", {
            attributes: {
                pattern: asset,
                width: 1,
                deactivationTime: 0.25,
                shadow: true,
                shadowStrength: 0.5
            }
        });
        app.root.addChild(hiro);

        // Create a box as a child of the Hiro marker
        var box = new pc.Entity("Box");
        box.addComponent("model", {
            type: "box"
        });
        box.setLocalPosition(0, 0.5, 0);
        hiro.addChild(box);

        // Create a directional light
        var light = new pc.Entity();
        light.addComponent("light", {
            type: "directional",
            color: new pc.Color(1, 1, 1),
            castShadows: true,
            shadowBias: 0.2,
            normalOffsetBias: 0.1,
            shadowDistance: 10,
            shadowType: pc.SHADOW_PCF5
        });
        light.setLocalEulerAngles(22, 0, -16);
        hiro.addChild(light);
    });
}

export { setup };
