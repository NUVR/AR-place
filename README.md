# AR-place

An augmented reality version of [r/place](https://www.reddit.com/r/place/).

A community-driven art canvas where every user can place a pixel in a color of their choice.

## Installation

First, clone this repository. Navigate into the directory installation location and run the following command.

```bash
npm install
```

This will install all node dependencies. This should take several minutes to clone so now would be the appropriate time to fill up your coffee or take the dog for a walk.

## Running

Run `npm start` or `yarn start` to start the webpack dev server.
See the app running here https://localhost:8080/. Hot reloading is enabled by default.

This application requires SSL to develop since iOS 11 limits WebRTC to secured websites only. You will be presented with an "Insecure SSL..." warning which you can ignore for development purposes.

### Technologies

* [node](https://nodejs.org/en/)
* [Viro](https://docs.viromedia.com/docs/quick-start)
* [three.js](https://threejs.org/)

### Roadmap

* [x] Set up build environment
* [ ] Set up marker tracking
* [ ] Set up SSL certificate generation
* [ ] Integrate ARToolkit with user camera
* [ ] Set up multi-marker tracking
* [ ] Place canvas in augmented reality space with three.js
* [ ] Store canvas data in [Firebase](https://firebase.google.com/)
* [ ] Authenticate users and allow them to add pixels to the canvas
* [ ] Build moderation abilities
* [ ] Deploy to the world

#### Extras

* [ ] Add metrics and analytics
* [ ] Build view-only version for devices without a camera
* [ ] Write native applications to increase performance

## Preview

![Preview](static/preview.gif)
