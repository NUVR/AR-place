const t = performance.now();
const artoolkit = import('jsartoolkit5');
artoolkit.then(() => {
    /*eslint no-console: "off"*/
    console.log('loaded jsartoolkit in ' + Math.round(performance.now() - t) + 'ms');
});

export { artoolkit };
