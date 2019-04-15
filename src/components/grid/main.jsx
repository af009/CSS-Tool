import React from "react";
import { Consumer } from "../../data/grid-data";

const MainGrid = () => {
  return (
    <Consumer>
      {context => (
        <div className="face" style={context.gridStyle}>
          {context.state.items.map((x, i) => {
            return (
              <div className="items" key={i}>
                <span className="span">
                  {x.name} {i + 1}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </Consumer>
  );
};

export default MainGrid;
