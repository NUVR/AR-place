import ARManager from './ARManager';

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  ARManager.init();
  ARManager.startRendering();
});
