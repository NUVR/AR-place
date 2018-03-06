import React from 'react';

import CameraCanvas from './CameraCanvas';
import VideoCanvas from './VideoCanvas';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDemo: true,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            showDemo: !this.state.showDemo
        })
    }

    render() {
        return (
            <div className="container">
                <h1>AR/Place</h1>
                <button onClick={this.onClick}>Toggle Demo</button>
                {this.state.showDemo ? <CameraCanvas /> : <VideoCanvas />}
            </div>
        );
    }
}
