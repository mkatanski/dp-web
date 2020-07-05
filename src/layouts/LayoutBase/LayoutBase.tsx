import React, { Suspense, ComponentType } from "react";
import { Route, RouteProps, Switch } from "react-router-dom";
import { LoadingScreen } from "components/fallbacks/LoadingScreen";

const NotFoundPage = React.lazy(() => import("pages/errors/NotFoundPage"));

export interface LayoutBaseProps extends RouteProps {
  /**
   * Component rendered by fallback route. By default its 'views/errors/NotFoundView'
   */
  fallbackRouteComponent?: ComponentType;
  /**
   * If true append default route if react-router switch won't match current path
   */
  useFallbackRoute?: boolean;
}

const LayoutBase: React.FC<LayoutBaseProps> = ({
  children,
  fallbackRouteComponent,
  useFallbackRoute = true,
  ...rest
}: LayoutBaseProps) => (
  <Route
    {...rest}
    render={() => (
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          {children}
          {useFallbackRoute && (
            <Route component={fallbackRouteComponent || NotFoundPage} />
          )}
        </Switch>
      </Suspense>
    )}
  />
);

export default LayoutBase;
