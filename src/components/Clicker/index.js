import React, { Component } from "react";
import "./style.css";

export default class Clicker extends Component {
  state = {
    count: 0,
    opacity_add: 1,
    opacity_reload: 1,
    opacity_subtract: 1
  };
  increment = () => {
    let num = 0;
    num = this.state.count;
    if (num <= 100000) {
      num = num + 1;
      this.setState({ count: num, opacity_add: 0.3 });
    }
  };
  decrement = () => {
    let num = 0;
    num = this.state.count;
    if (num > -100000) {
      num = num - 1;
      this.setState({ count: num, opacity_subtract: 0.3 });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="heading">
          <div className="heading_content">
            <i className="far fa-hand-point-up" /> React Clicker
          </div>
        </div>
        <div className="clicker">
          <div className="disp">{this.state.count}</div>
          <div className="buttons">
            <div
              className="add"
              onMouseDown={() => this.increment()}
              onMouseUp={() => this.setState({ opacity_add: 1 })}
              onMouseOver={() => this.setState({ opacity_add: 0.5 })}
              onMouseOut={() => {
                this.setState({ opacity_add: 1 });
              }}
              style={{ opacity: this.state.opacity_add }}
            >
              <i class="fas fa-plus" />
            </div>
            <div
              className="reload"
              onMouseDown={() =>
                this.setState({ count: 0, opacity_reload: 0.3 })
              }
              onMouseUp={() => this.setState({ opacity_reload: 1 })}
              onMouseOver={() => this.setState({ opacity_reload: 0.5 })}
              onMouseOut={() => {
                this.setState({ opacity_reload: 1 });
              }}
              style={{ opacity: this.state.opacity_reload }}
            >
              <i className="fas fa-redo-alt" />
            </div>
            <div
              className="subtract"
              onMouseDown={() => this.decrement()}
              onMouseUp={() => this.setState({ opacity_subtract: 1 })}
              onMouseOver={() => this.setState({ opacity_subtract: 0.5 })}
              onMouseOut={() => {
                this.setState({ opacity_subtract: 1 });
              }}
              style={{ opacity: this.state.opacity_subtract }}
            >
              <i class="fas fa-minus" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
