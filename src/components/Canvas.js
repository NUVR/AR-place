import React from 'react';

import { setup } from '../scripts/scene.js';

export default class Canvas extends React.Component {
    componentDidMount() {
        const [width, height] = [700, 500];
        setup(this.refs['sceneContainer'], width, height);
    }

    render() {
        return <div ref="sceneContainer"></div>;
    }
}
