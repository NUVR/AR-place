function artoolkit() {
    const t = performance.now();
    return import('jsartoolkit5').then(() => {
        /*eslint no-console: "off"*/
        console.log('loaded jsartoolkit in ' + Math.round(performance.now() - t) + 'ms');
    });
}

export default artoolkit;
