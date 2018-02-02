import React from 'react';

export default class Canvas extends React.Component {
    componentDidMount() {
        const c = this.refs['canvas'];
        const ctx = c.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(20, 20, 50, 50);
    }

    render() {
        return <canvas ref="canvas"></canvas>;
    }
}
