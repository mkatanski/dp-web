import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { withThemeProvider } from "_test-helpers";

/* Uncomment below if needed */
// import { withThemeProvider, withDesktopSize } from 'testsHelpers';
// import { render, getByTestId } from "@testing-library/react";

import { PageTitle } from "../PageTitle";

/* Uncomment below if You need/want to use enzyme */
// import enzyme from "enzyme";

describe("components", () => {
  describe("PageTitle", () => {
    it("should render PageTitle component", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<PageTitle category="category" title="title" />)
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
