import ARManager from './ARManager';

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#start').addEventListener('click', ev => {
    ARManager.init();
    ARManager.startRendering();
    ev.target.classList.add('hidden');
  });
});
