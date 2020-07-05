/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { withThemeProvider, withTabletSize } from "_test-helpers";
import { TopBar } from "../TopBar";

describe("components", () => {
  describe("TopBar", () => {
    it("should render TopBar component with children", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<TopBar>children</TopBar>)
      );
      expect(tree).toMatchSnapshot();
    });

    it("should render TopBar component with tablet size", () => {
      const tree = TestRenderer.create(
        withTabletSize(withThemeProvider(<TopBar>children</TopBar>))
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
