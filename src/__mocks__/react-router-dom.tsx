/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const Link = (props: any) => (
  <div id="Link" {...props}>
    {props.children}
  </div>
);

export const Route = ({ render, component, ...rest }: any) => (
  <div id="ReactRouter.Route" {...rest}>
    {render ? render({}) : React.createElement(component)}
  </div>
);

export const Switch = (props: any) => (
  <div id="ReactRouter.Switch" {...props}>
    {props.children}
  </div>
);

export const Redirect = (props: any) => (
  <div id="ReactRouter.Redirect" {...props}>
    {props.children}
  </div>
);

export const NavLink = (props: any) => (
  <div id="ReactRouter.NavLink" {...props}>
    {props.children}
  </div>
);

export const useHistory = jest.fn().mockReturnValue({
  push: jest.fn()
});

export const useParams = jest.fn().mockReturnValue({});
export const useLocation = jest.fn().mockReturnValue({ hash: "" });
