import React from 'react';

import Canvas from './Canvas';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDemo: false,
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
                {this.state.showDemo ? <Canvas /> : null}
            </div>
        );
    }
}
