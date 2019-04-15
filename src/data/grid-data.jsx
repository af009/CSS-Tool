import React, { Component } from "react";

export const { Consumer, Provider } = React.createContext();

export default class GridData extends Component {
  state = {
    columns: 3,
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

          addCol: () => {
            if (this.state.columns === 12) return;
            this.setState({
              columns: this.state.columns + 1
            });
          },

          removeCol: () => {
            if (this.state.columns === 1) return;
            this.setState({
              columns: this.state.columns - 1
            });
          },

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
            console.log([e.target.name] + ":" + [e.target.value]);
            this.setState({
              [e.target.name]: [e.target.value]
            });
          },

          reset: () => {
            this.setState({
              columns: 3,
              gap: 10,
              items: [{ name: "item" }, { name: "item" }, { name: "item" }],
              align: "start",
              justify: "start"
            });
          },

          gridStyle: {
            display: `grid`,
            gridTemplateColumns: `repeat(${this.state.columns}, 1fr)`,
            gridGap: `${this.state.gap}px`,
            alignContent: `${this.state.align}`,
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
