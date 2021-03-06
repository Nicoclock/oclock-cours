import React, { Component, Fragment } from 'react';

import {digits} from "../../utils";

import style from "./Timer.module.scss";

class Timer extends Component {

    timeRef = null;

    state = {
        hours: parseInt(this.props.startTime.split(":")[0], 10),
        minutes: parseInt(this.props.startTime.split(":")[1], 10),
        seconds: parseInt(this.props.startTime.split(":")[2], 10),
        isNeg: false,
        isPaused: false
    }

    removeTime = () => {
        let {hours, minutes, seconds} = this.state;
        if (!this.state.isNeg) {
            seconds -= 1;
            if (seconds === 0 && minutes === 0 && hours === 0)
                this.setState({hours, minutes, seconds, isNeg: true});
            else {
                if (seconds < 0) {
                    seconds = 59;
                    minutes -= 1;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours -= 1;
                }
            }
        } else {
            seconds += 1;
            if (seconds === 60) {
                seconds = 0;
                minutes += 1;
            }
            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }
        }
        this.setState({hours, minutes, seconds});
    }

    isRed = () => this.state.isNeg && this.state.seconds !== 0;

    pause = () => {
        clearInterval(this.timeRef);
        this.setState({paused: true});
    }

    unpause = () => {
        this.timeRef = setInterval(this.removeTime, 1000);
        this.setState({paused: false});
    }

    componentDidMount() {
        this.timeRef = setInterval(this.removeTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeRef);
    }

    render() {
        return (
            <Fragment>
                {this.state.paused ? 
                    <div className={style.Pause}>
                        <div className={style.PausedButton} onClick={this.unpause}>REPLAY !!!</div>
                    </div>
                :
                    <div className={style.PauseButton} onClick={this.pause}>PAUSE</div>            
                }
                <div className={style.Timer + (this.isRed() ? " "+style.Red : "")}>
                    {(this.isRed()  ? "- " : "") + `${digits(this.state.hours, 2)} : ${digits(this.state.minutes, 2)} : ${digits(this.state.seconds, 2)}`}
                </div>
            </Fragment>
        );
    }
}

export default Timer;