import { Mesh, OctahedronGeometry, MeshNormalMaterial } from 'three';

const geometry = new OctahedronGeometry(0.5);
const material = new MeshNormalMaterial({
    transparent: true,
    opacity: 0.75,
});
const mesh = new Mesh(geometry, material);

export { mesh };
