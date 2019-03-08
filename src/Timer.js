import React from "react";

class Timer extends React.Component {
    constructor() {
        super();
        this.start = this.start.bind(this);
        this.tick = this.tick.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { initValue: 0, timerId: 0 };
    }

    tick() {
        this.setState({ initValue: this.state.initValue + 1 });
        this.start();
    }

    start() {
        const id = setTimeout(this.tick, 100);
        this.setState({ timerId: id });
    }

    stop() {
        clearTimeout(this.state.timerId);
        this.setState({ timerId: 0 });
    }

    reset() {
        clearTimeout(this.state.timerId);
        this.setState({ initValue: 0, timerId: 0 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.initValue}</h1>
                <button onClick={this.start} disabled={this.state.timerId != 0}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }

}

export default Timer;