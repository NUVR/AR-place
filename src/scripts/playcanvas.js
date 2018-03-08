function init() {
    const t = performance.now();
    return import('../../lib/playcanvas').then(() => {
        /*eslint no-console: "off"*/
        console.log('loaded playcanvas in ' + Math.round(performance.now() - t) + 'ms');
    });
}

export default init;
