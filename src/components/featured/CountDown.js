import React, { Component } from "react";
//React-Reveal Slider Effect
import LeftSlider from "react-reveal/Slide";

export default class CountDown extends Component {
  state = {
    deadline: "Jan, 25,2020",
    days: "0",
    hours: "0",
    minutes: "0",
    second: "0"
  };

  startCountDown = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("opps ! You Are Miss it");
    } else {
      const Second = Math.floor((time / 1000) % 60);
      const Minutes = Math.floor((time / 1000 / 60) % 60);
      const Hourse = Math.floor((time / (1000 * 60 * 60)) % 24);
      const Days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        hours: Hourse,
        minutes: Minutes,
        second: Second,
        days: Days
      });
    }
  };

  componentDidMount() {
    setInterval(() => this.startCountDown(this.state.deadline), 1000);
  }

  render() {
    return (
      <LeftSlider left delay={1000}>
        <div className="countdown-wrapper">
          <div className="countdown-top">Event Start in</div>
          <div className="countdown-bottom">
            {/* Days */}
            <div className="countdown-item">
              <div className="countdown-time">{this.state.days}</div>
              <div className="countdown-tags">Days</div>
            </div>
            {/* Hours */}
            <div className="countdown-item">
              <div className="countdown-time">{this.state.hours}</div>
              <div className="countdown-tags">Hr</div>
            </div>
            {/* Minutes */}
            <div className="countdown-item">
              <div className="countdown-time">{this.state.minutes}</div>
              <div className="countdown-tags">Min</div>
            </div>
            {/* Seconds */}
            <div className="countdown-item">
              <div className="countdown-time">{this.state.second}</div>
              <div className="countdown-tags">Sec</div>
            </div>
          </div>
        </div>
      </LeftSlider>
    );
  }
}
