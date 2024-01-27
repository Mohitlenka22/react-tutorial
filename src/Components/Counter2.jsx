import React, { Component } from 'react';

class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }; //state is a object
        this.updateCount = this.updateCount.bind(this);
        this.ResetCount = this.ResetCount.bind(this);
    }

    updateCount(amount) {
        this.setState(prevState => {
            return { count: prevState.count + amount }
        });
    }
    ResetCount() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.state.count}</h1>
                <button onClick={() => { this.updateCount(1) }}>Increment</button>
                <button onClick={() => { this.updateCount(-1) }}>Decrement</button>
                <button onClick={this.ResetCount}>Reset</button>
            </div>
        );
    }
};
export default Counter2;