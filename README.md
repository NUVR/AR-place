# AR-place

An augmented reality version of [r/place](https://www.reddit.com/r/place/)

A community-driven art canvas where every user can place a pixel in a color of their choice

## Running

Run `npm start` or `yarn start` to start the webpack dev server.
See the app running here http://localhost:8080. Hot reloading is enabled by default.

### Technologies
- [jsartoolkit5](https://github.com/artoolkitx/jsartoolkit5)
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
