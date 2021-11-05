import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "../../store/hooks";

interface AuthLayoutProps {
  component: any;
  layout: any;
  isAuthProtected: any;
  path?: string;
  exact?: boolean;
  key?: number;
}

const Authmiddleware = ({
  component,
  layout,
  isAuthProtected,
  path,
  exact,
  key,
  ...rest
}: AuthLayoutProps) => {
  const Layout = layout;
  const Component = component;
  const access_token = useSelector(s => s.user.token)
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthProtected && !access_token) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default Authmiddleware;
