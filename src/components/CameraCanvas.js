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
        setup(this.canvas, width, height);
    }
    
    render() {
        const { width, height } = this.state;

        return (
            <div id="sceneContainer" ref={ (el) => this.sceneContainer = el }>
                <canvas ref={ (el) => this.canvas = el } width={ width } height={ height } loop />
            </div>
        );
    }
}