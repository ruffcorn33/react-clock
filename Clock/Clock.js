import React, {Component} from "react";
import "./Clock.css";
const moment = require('moment');

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeFormat: this.props.Format24H,            
        };
    };

    componentDidMount() {
        setInterval( () => {
            let now = new Date();
            let currentTime = moment(now).format("h:mm a");
            if (this.props.format24H) {
                currentTime = moment(now).format("HH:mm");
            }

            this.setState({
                currentTime : currentTime,
            })
        },1000)
    }

    render() {

        return (

            <div id="display-time">
                {this.state.currentTime}
            </div>

        )
    }
}

export default Clock;
