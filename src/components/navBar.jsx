import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    icon: "fas fa-cube",
    name: "3D Transforms",
    link: "/CSS-Tool/"
  },
  {
    icon: "fas fa-th-large",
    name: "Grid",
    link: "/CSS-Tool/grid"
  },
  {
    icon: "fas fa-box",
    name: "Flexbox",
    link: "/CSS-Tool/flexbox"
  }
];

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="rotate">CSS Tool</h1>
      <nav>
        <ul>
          {links.map((x, i) => {
            return (
              <NavLink className="tooltip li" key={i} to={x.link} exact>
                <i className={x.icon} name={x.name} />
                <span className="tooltiptext">{x.name}</span>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
