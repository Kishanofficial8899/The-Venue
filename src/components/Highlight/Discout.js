import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Button from "../Utilities/MyButton";

export default class Discout extends Component {
  state = {
    discountStart: 0,
    discountEnd: 18
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => this.percentage(), 30);
  }

  render() {
    return (
      <div className="center-wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Fade right>
            <div className="discount-description">
              <h3>Purchase Before The Event End</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                blanditiis, deleniti enim quia consectetur delectus hic
                consequuntur, aut qui est perspiciatis, ab perferendis iusto.
                Deserunt obcaecati vitae mollitia culpa ab?
              </p>
              <div>
                <Button
                  text="Purchase Tickets"
                  color="#bada10"
                  margin="1rem"
                  Link="https://insider.in/arijit-singh-live-in-mumbai-one-night-only-2020/event"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
