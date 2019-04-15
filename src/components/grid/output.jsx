import React from "react";
import { Consumer } from "../../data/grid-data";

const handleCopy = target => {
  const copyCSS = document.getElementById(target);
  copyCSS.select();
  document.execCommand("copy");
};

const GridOutput = () => {
  return (
    <Consumer>
      {context => (
        <div className="output">
          <textarea
            id="copy-target"
            readOnly={true}
            rows="12"
            cols="40"
            value={`.container {\n  display: grid;\n  grid-template-columns: repeat(${
              context.state.columns
            }, 1fr);\n  grid-gap: ${context.state.gap}px;\n  align-content: ${
              context.state.align
            };\n  justify-content: ${
              context.state.justify
            };\n}\n.items {\n  border: 1px solid black;\n  border-radius: 10px;\n}`}
          />
          <button
            type="button"
            className="copy-modalBTN"
            onClick={() => handleCopy("copy-target")}
          >
            Copy CSS
          </button>
        </div>
      )}
    </Consumer>
  );
};

export default GridOutput;
