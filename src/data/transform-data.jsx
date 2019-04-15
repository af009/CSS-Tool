import React, { Component } from "react";

export const { Provider, Consumer } = React.createContext();

export default class TransformData extends Component {
  state = {
    pv: { name: "pv", value: 0, max: "1000", min: "0" },
    rotateX: { name: "rotateX", value: 0, max: "360", min: "-360" },
    rotateY: { name: "rotateY", value: 0, max: "360", min: "-360" },
    rotateZ: { name: "rotateZ", value: 0, max: "360", min: "-360" },
    skewX: { name: "skewX", value: 0, max: "50", min: "-50" },
    skewY: { name: "skewY", value: 0, max: "50", min: "-50" },
    scaleX: { name: "scaleX", value: 1, max: "10", min: "1" },
    scaleY: { name: "scaleY", value: 1, max: "10", min: "1" }

    // width: { name: "width", value: 200, max: "400", min: "20" },
    // height: { name: "height", value: 200, max: "400", min: "20" }
  };
  render() {
    return (
      <Provider
        value={{
          state: this.state,

          addRotate: e => {
            this.setState({
              [e.target.name]: {
                value: e.target.value,
                name: this.state[e.target.name].name,
                min: this.state[e.target.name].min,
                max: this.state[e.target.name].max
              }
            });
          },

          reset: () => {
            this.setState({
              pv: {
                name: "pv",
                value: 0,
                max: "1000",
                min: "0"
              },
              rotateX: { name: "rotateX", value: 0, max: "360", min: "-360" },
              rotateY: { name: "rotateY", value: 0, max: "360", min: "-360" },
              rotateZ: { name: "rotateZ", value: 0, max: "360", min: "-360" },
              skewX: { name: "skewX", value: 0, max: "50", min: "-50" },
              skewY: { name: "skewY", value: 0, max: "50", min: "-50" },
              scaleX: { name: "scaleX", value: 1, max: "10", min: "1" },
              scaleY: { name: "scaleY", value: 1, max: "10", min: "1" }
              // width: { name: "width", value: 200, max: "400", min: "20" },
              // height: { name: "height", value: 200, max: "400", min: "20" }
            });
          },

          styles: {
            transformStyle: `preserve-3d`,
            transform: `perspective(${this.state.pv.value}px) rotateX(${
              this.state.rotateX.value
            }deg) rotateY(${this.state.rotateY.value}deg) rotateZ(${
              this.state.rotateZ.value
            }deg) skewX(${this.state.skewX.value}deg) skewY(${
              this.state.skewY.value
            }deg) scaleX(${this.state.scaleX.value}) scaleY(${
              this.state.scaleY.value
            }) `,

            width: `200px`,
            height: `200px`,
            border: `1px solid #000`,
            boxShadow: `1px 1px 1px #000`,
            borderRadius: `20px`,
            transition: `all 0.6s`
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
