import React from 'react';

import { setup } from '../scripts/scene';

import '../styles/global.scss';

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 640,
            height: 480,
        };
    }

    componentDidMount() {
        const { width, height } = this.state;
        console.log(width, height);
        setup(this.refs['sceneContainer'], this.refs['video'], width, height);
    }

    render() {
        const { width, height } = this.state;

        return (
            <div id="sceneContainer" ref="sceneContainer">
                <video id="video" ref="video" src="static/test.mov" width={ width } height={ height } autoPlay loop controls="false" />
            </div>
        );
    }
}
