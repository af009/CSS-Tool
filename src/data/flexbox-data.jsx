import React, { Component } from "react";

export const { Consumer, Provider } = React.createContext();

export default class FlexboxData extends Component {
  state = {
    gap: 10,
    items: [{ name: "item" }, { name: "item" }, { name: "item" }],
    align: "start",
    justify: "start"
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,

          addItem: () => {
            const items = [...this.state.items];
            items.push({ name: "item" });
            this.setState({
              items
            });
          },
          removeItem: () => {
            if (this.state.items.length === 1) return;
            const items = [...this.state.items];
            items.pop();
            this.setState({
              items
            });
          },

          onSelect: e => {
            this.setState({
              [e.target.name]: [e.target.value]
            });
          },

          reset: () => {
            this.setState({
              gap: 10,
              items: [{ name: "item" }, { name: "item" }, { name: "item" }],
              align: "start",
              justify: "start"
            });
          },

          gridStyle: {
            display: `flex`,
            gridGap: `${this.state.gap}px`,
            flexDirection: `row`,
            flexWrap: `nowrap`,
            alignItems: `${this.state.align}`,
            justifyContent: `${this.state.justify}`
          },

          itemStyle: {
            border: `1px solid black`,
            borderRadius: `10px`
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
