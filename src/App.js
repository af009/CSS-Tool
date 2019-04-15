import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import "./App.css";
import "./components/main.css";
import TransformData from "./data/transform-data";
import Input from "./components/transform/sidebar";
import Face from "./components/transform/main";
import SidebarGrid from "./components/grid/sidebar";
import MainGrid from "./components/grid/main";
import GridData from "./data/grid-data";
import SidebarFlexbox from "./components/flexbox/sidebar";
import MainFlexbox from "./components/flexbox/main";
import FlexboxData from "./data/flexbox-data";

const routes = [
  {
    path: "/CSS-Tool/",
    exact: true,
    sidebar: () => <Input />,
    main: () => <Face />
  },
  {
    path: "/CSS-Tool/grid",
    sidebar: () => <SidebarGrid />,
    main: () => <MainGrid />
  },
  {
    path: "/CSS-Tool/flexbox",

    sidebar: () => <SidebarFlexbox />,
    main: () => <MainFlexbox />
  }
];

class App extends React.Component {
  render() {
    return (
      <Router>
        {" "}
        <div className="App grid">
          <TransformData>
            <GridData>
              <FlexboxData>
                <div className="panel">
                  <Navbar />
                  {routes.map(route => (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                      component={route.sidebar}
                    />
                  ))}
                </div>

                {routes.map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </FlexboxData>
            </GridData>
          </TransformData>
        </div>
      </Router>
    );
  }
}

export default App;
