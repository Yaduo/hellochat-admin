import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { userRoutes, authRoutes } from "./routes/allRoutes";
import { useSelector } from "react-redux";
import Authmiddleware from "./routes/middleware/Authmiddleware";
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/index";
import NonAuthLayout from "./components/NonAuthLayout";
import "./assets/scss/theme.scss";
import "./assets/scss/preloader.scss";
import config from "./config";
// Activating fake backend
import fakeBackend from "./helpers/AuthType/fakeBackend";
// fakeBackend();

const App = () => {
  const { layoutType } = useSelector((state: any) => ({
    layoutType: state.Layout.layoutType,
  }));

  function getLayout() {
    let layoutCls: Object = VerticalLayout;
    switch (layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout();
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {userRoutes.map((route: any, idx: number) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
