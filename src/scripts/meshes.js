import {
    Mesh, Group,
    BoxBufferGeometry,
    MeshBasicMaterial,
    TextureLoader
} from 'three';

const texture = new TextureLoader().load('/static/textures/crate.gif');

const geometry = new BoxBufferGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ map: texture });
const mesh = new Mesh(geometry, material);

const group = new Group();
group.add(mesh);

export default group;
