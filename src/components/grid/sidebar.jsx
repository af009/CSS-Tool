import React from "react";
import { Consumer } from "../../data/grid-data";
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

const buttons = [
  {
    name: "Remove Item",
    value: "removeItem",
    class: "fas fa-minus-circle"
  },

  {
    name: "Remove Column",
    value: "removeCol",
    class: "fas fa-minus-circle"
  },
  {
    name: "Add Item",
    value: "addItem",
    class: "fas fa-plus-circle"
  },
  {
    name: "Add Column",
    value: "addCol",
    class: "fas fa-plus-circle"
  }
];

const SidebarGrid = () => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          <h1 className="h1-grid">Grid</h1>
          <div className="buttons">
            <h2 className="h1-grid">Items: {context.state.items.length}</h2>
            <h2 className="h1-grid">Columns: {context.state.columns}</h2>
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

            <label htmlFor="align">Content Align</label>
            <select
              name="align"
              id="align"
              onChange={context.onSelect}
              value={context.state.align}
            >
              {alignContent.map((x, i) => {
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
              onChange={context.onSelect}
              value={context.state.justify}
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
            <Modal toRender="Grid Output" />
            <button className="reset" onClick={context.reset}>
              Reset
            </button>
          </div>
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default SidebarGrid;
