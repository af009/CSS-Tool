import React from "react";
import { Consumer } from "../../data/transform-data";
import Modal from "../modal";

function upCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// const handleShow = () => {
//   let showBTN = document.getElementById("show").textContent;
//   document.getElementById("show").textContent =
//     showBTN === "Show CSS" ? "Hide CSS" : "Show CSS";
//   const copyCSS = document.querySelector(".output");
//   copyCSS.classList.toggle("active-output");
// };

const Sidebar = () => {
  return (
    <React.Fragment>
      <h1 className="h1-grid">Transforms</h1>
      <div className="panelTransform">
        <Consumer>
          {context => (
            <React.Fragment>
              {Object.keys(context.state).map((x, i) => {
                return (
                  <div className="inputContainer" key={i}>
                    <label htmlFor="input">
                      <span className="inputName">
                        {upCase(context.state[x].name)}
                      </span>
                      <span className="inputValue">
                        {context.state[x].value}
                      </span>
                    </label>
                    <input
                      type="range"
                      max={context.state[x].max}
                      min={context.state[x].min}
                      step="1"
                      value={context.state[x].value}
                      onChange={e => context.addRotate(e)}
                      name={context.state[x].name}
                    />
                  </div>
                );
              })}

              <Modal toRender="Transform Output" />

              <button type="button" className="reset" onClick={context.reset}>
                Reset
              </button>
            </React.Fragment>
          )}
        </Consumer>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
