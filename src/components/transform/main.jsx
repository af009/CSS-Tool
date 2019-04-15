import React from "react";
import { Consumer } from "../../data/transform-data";

const Main = () => {
  return (
    <Consumer>
      {({ styles }) => (
        <div className="face">
          <h1 style={styles}>Face</h1>
        </div>
      )}
    </Consumer>
  );
};

export default Main;
