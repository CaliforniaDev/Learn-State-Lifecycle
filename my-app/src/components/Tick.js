import React, { Component } from "react";

const FormattedDate = (props) => {
    return (
        <div>
            <h1>Hello Clock!</h1>
            <h2>It is {props.date.toLocaleString()}</h2>
            {/*This is an example of top-down or unidirectional data flow */}
        </div>
    );
}
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentWillMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }

}
export default Clock;