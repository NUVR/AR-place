# AR-place

An augmented reality version of [r/place](https://www.reddit.com/r/place/)

A community-driven art canvas where every user can place a pixel in a color of their choice

## Cloning

HTTP: `git clone --recurse-submodules https://github.com/NUVR/AR-place.git`

SSH: `git clone --recurse-submodules git@github.com:NUVR/AR-place.git`

## Running

Run `npm start` or `yarn start` to start the webpack dev server.
See the app running here http://localhost:8080/static. Hot reloading is enabled by default.

### Technologies
- [jsartoolkit5](https://github.com/NUVR/jsartoolkit5)
- [three.js](https://threejs.org/)

### Roadmap
- [x] Set up build environment
- [ ] Set up marker tracking with jsartoolkit
- [ ] Set up multi-marker tracking
- [ ] Place canvas in augmented reality space with three.js
- [ ] Store canvas data in [Firebase](https://firebase.google.com/)
- [ ] Authenticate users and allow them to add pixels to the canvas
- [ ] Build moderation abilities
- [ ] Deploy to the world

#### Extras
- [ ] Add metrics and analytics
- [ ] Build view-only version for devices without a camera
- [ ] Write native applications to increase performance
