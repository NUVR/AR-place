import { Mesh, BoxGeometry, MeshPhongMaterial } from 'three';

const geometry = new BoxGeometry(3, 1, 1);
const material = new MeshPhongMaterial({ color: 0x10c0e0 });
const mesh = new Mesh(geometry, material);

export { mesh };
