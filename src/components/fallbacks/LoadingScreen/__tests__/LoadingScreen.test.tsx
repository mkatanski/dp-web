import React from "react";
import TestRenderer from "react-test-renderer";
import { withThemeProvider } from "_test-helpers";
import "jest-styled-components";

import { LoadingScreen } from "../LoadingScreen";

describe("components", () => {
  describe("LoadingScreen", () => {
    it("should render LoadingScreen component", () => {
      const tree = TestRenderer.create(withThemeProvider(<LoadingScreen />));

      expect(tree).toMatchSnapshot();
    });
  });
});
