/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import App from "App";

import Routes from "../routes";

import { withThemeProvider } from "_test-helpers";

jest.mock("routes", () => jest.fn());

jest.mock("react-router-dom", () => ({
  BrowserRouter: (props: React.PropsWithChildren<{}>) => (
    <div id="BrowserRouter">{props.children}</div>
  )
}));

jest.mock("@material-ui/styles", () => ({
  ...require.requireActual("@material-ui/styles"),
  ThemeProvider: (props: React.PropsWithChildren<{}>) => (
    <div id="MUI.ThemeProvider">{props.children}</div>
  )
}));

jest.mock("components/fallbacks/LoadingScreen", () => ({
  LoadingScreen: jest.fn(() => {
    return <div id="LoadingScreen" />;
  })
}));

describe("App", () => {
  it("should render App component", async () => {
    (Routes as jest.Mock).mockImplementationOnce(() => <div>Routes</div>);

    const tree = TestRenderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });

  it("should render a loading screen as a fallback", async () => {
    (Routes as jest.Mock).mockImplementationOnce(() => {
      throw new Promise(r => {
        r();
      });
    });
    const tree = TestRenderer.create(withThemeProvider(<App />));
    expect(tree).toMatchSnapshot();
  });
});
