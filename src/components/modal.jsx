import React, { Component } from "react";
import TransformOutput from "./transform/output";
import GridOutput from "./grid/output";
import FlexboxOutput from "./flexbox/output";

class Modal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
    const modal = document.getElementById("myModal");
    if (this.state.open) {
      modal.style.display = "block";
      modal.style.opacity = 1;
    } else {
      modal.style.display = "none";
      modal.style.opacity = 0;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span
              style={{ fontSize: "2rem" }}
              className="close"
              onClick={this.handleOpen}
            >
              &times;
            </span>
            <h1 style={{ color: "white" }}>CSS (Without Prefix)</h1>
            {/* We show the css results based on the property that we receive */}
            {this.props.toRender === "Transform Output" ? (
              <TransformOutput />
            ) : this.props.toRender === "Grid Output" ? (
              <GridOutput />
            ) : this.props.toRender === "Flexbox Output" ? (
              <FlexboxOutput />
            ) : null}
          </div>
        </div>
        <button id="myBtn" className="show" onClick={this.handleOpen}>
          Show Code
        </button>

        <a
          href="https://github.com/af009/CSS-Tool"
          target="_blank"
          rel="noopener noreferrer"
          className="gitBTN"
        >
          <i className="fab fa-github" />
        </a>
      </React.Fragment>
    );
  }
}

export default Modal;
