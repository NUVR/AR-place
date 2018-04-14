# AR-place

An augmented reality version of [r/place](https://www.reddit.com/r/place/).

A community-driven art canvas where every user can place a pixel in a color of their choice.

## Installation

### Step 1. Install Node Modules

First, clone this repository. Navigate into the directory installation location and run the following command:

```bash
npm install
```

This will install all node dependencies. This should take several minutes to clone so now would be the appropriate time to fill up your coffee or take the dog for a walk.

### Step 2. Install Ngrok

Ngrok is used to create a secure tunnel for your local web service. This is mainly used by Viro. First, check if you have Ngrok installed by running the command `ngrok`. If you do not have it installed, run the following command:

```bash
npm install -g ngrok
```

If global package installs require super and since ngrok needs to download some additional binaries, you _might_ need to run the following:

```bash
sudo npm i -g ngrok --unsafe-perm=true --allow-root
```

## Running

Run `npm start` or `yarn start` to start the Ngrok package server.
See the app by visting the (https://xxxxxx.ngrok.io) url, which is printed at the top of the terminal window where you ran `npm start`.

You can also navigate to http://localhost:4040/status to find the status of your Ngrok package server.

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
