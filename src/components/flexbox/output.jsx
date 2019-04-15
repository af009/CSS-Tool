import React from "react";
import { Consumer } from "../../data/flexbox-data";

const handleCopy = target => {
  const copyCSS = document.getElementById(target);
  copyCSS.select();
  document.execCommand("copy");
};

const FlexboxOutput = () => {
  return (
    <Consumer>
      {context => (
        <div className="output">
          <textarea
            id="copy-target"
            readOnly={true}
            rows="8"
            cols="40"
            value={`.container {\n  display: flex;\n  grid-gap: ${
              context.state.gap
            }px;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: ${
              context.state.align
            };\n  justify-content: ${context.state.justify};\n}`}
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

export default FlexboxOutput;
