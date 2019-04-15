import React from "react";
import { Consumer } from "../../data/transform-data";

const handleCopy = target => {
  const copyCSS = document.getElementById(target);
  copyCSS.select();
  document.execCommand("copy");
};

const TransformOutput = () => {
  return (
    <Consumer>
      {context => (
        <div className="output">
          <textarea
            id="copy-target"
            readOnly={true}
            rows="7"
            cols="40"
            value={`.mystyle {\n  width:200px;\n  height:200px;\n  transform-style: preserve-3d;\n  transform:perspective(${
              context.state.pv.value
            }px) rotateX(${context.state.rotateX.value}deg) rotateY(${
              context.state.rotateY.value
            }deg) rotateZ(${context.state.rotateZ.value}deg)  skewX(${
              context.state.skewX.value
            }deg)  skewY(${context.state.skewY.value}deg)  scaleX(${
              context.state.scaleX.value
            }) scaleY(${context.state.scaleY.value}); \n }`}
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

export default TransformOutput;
