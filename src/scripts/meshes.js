import {
    Mesh, Group,
    PlaneGeometry,
    MeshBasicMaterial
} from 'three';

const geometry = new PlaneGeometry(1, 1);
const material = new MeshBasicMaterial({ color: 0xff0000 });
const mesh = new Mesh(geometry, material);
const iGeometry = new PlaneGeometry(0.3, 0.3);
const iMaterial = new MeshBasicMaterial({ color: 0xffffff });
const indicator = new Mesh(iGeometry, iMaterial);
indicator.position.set(0.25, 0.25, 0.1);
const group = new Group();
group.add(mesh);
group.add(indicator);

export default group;
