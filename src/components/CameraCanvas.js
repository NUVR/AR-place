import React from 'react';

import { setup } from '../scripts/scene';

import '../styles/global.scss';


export default class CameraCanvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 640,
            height: 480,
        };
    }

    componentDidMount() {
        const { width, height } = this.state;
        // setup(this.sceneContainer, this.video, width, height);

        var video = document.querySelector('video')

        var constraints = {
            audio: false,
            video: {
                facingMode: 'user'
            }
        }

        navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
            video.srcObject = stream
        })
    }
    
    render() {
        const { width, height } = this.state;

        return (
            <div id="sceneContainer" ref={ (el) => this.sceneContainer = el }>
                <video autoPlay playsInline />
            </div>
        );
    }
}