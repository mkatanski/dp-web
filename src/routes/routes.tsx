import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { paths } from "config/paths";

const NotFoundPage = React.lazy(() => import("pages/errors/NotFoundPage"));
const HomePage = React.lazy(() => import("pages/public/HomePage"));
const TemplatesPage = React.lazy(() => import("pages/public/TemplatesPage"));

const DefaultLayout = React.lazy(() => import("layouts/DefaultLayout"));

const Routes: React.FC = () => {
  return (
    <Switch>
      <DefaultLayout path="/*">
        <Route
          path="/"
          exact
          render={() => <Redirect to={paths.deployments} />}
        />
        <Route path={[paths.deployments]} exact component={HomePage} />
        <Route path={[paths.templates]} exact component={TemplatesPage} />
        <Route component={NotFoundPage} />
      </DefaultLayout>
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
