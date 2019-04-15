import React from "react";
import { Consumer } from "../../data/flexbox-data";
import Modal from "../modal";

const alignContent = [
  "start",
  "end",
  "center",
  "stretch",
  "space-around",
  "space-between",
  "space-evenly"
];

const alignItems = ["start", "end", "center", "stretch", "baseline"];

const buttons = [
  {
    name: "Remove Item",
    value: "removeItem",
    class: "fas fa-minus-circle"
  },

  {
    name: "Add Item",
    value: "addItem",
    class: "fas fa-plus-circle"
  }
];

const SidebarFlexbox = () => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          <h1 className="h1-grid">Flexbox</h1>
          <div>
            <h2 className="h1-grid">Items: {context.state.items.length}</h2>
          </div>
          <div className="buttons">
            {buttons.map((x, i) => {
              return (
                <i
                  className={x.class}
                  onClick={context[x.value]}
                  name={x.name}
                  key={x + i}
                />
              );
            })}

            <label htmlFor="align">Align Items</label>
            <select
              name="align"
              id="align"
              value={context.state.align}
              onChange={context.onSelect}
            >
              {alignItems.map((x, i) => {
                return (
                  <option value={x} key={i + x}>
                    {" "}
                    {x}
                  </option>
                );
              })}
            </select>
            <label htmlFor="justify">Justify Content</label>
            <select
              name="justify"
              id="justify"
              value={context.state.justify}
              onChange={context.onSelect}
            >
              {alignContent.map((x, i) => {
                return (
                  <option value={x} key={i}>
                    {" "}
                    {x}
                  </option>
                );
              })}
            </select>
            <Modal toRender="Flexbox Output" />
            <button className="reset" onClick={context.reset}>
              Reset
            </button>
          </div>
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default SidebarFlexbox;
