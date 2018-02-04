import { Mesh, BoxGeometry, MeshPhongMaterial } from 'three';

const t = performance.now();
import('jsartoolkit5').then(() => console.log('loaded jsartoolkit in: ' + Math.round(performance.now() - t) + 'ms'));

const geometry = new BoxGeometry(3, 1, 1);
const material = new MeshPhongMaterial({ color: 0x10c0e0 });
const mesh = new Mesh(geometry, material);

export { mesh };
