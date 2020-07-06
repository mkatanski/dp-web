import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

/* Uncomment below if needed */
import { withThemeProvider } from "_test-helpers";
// import { render, getByTestId } from "@testing-library/react";

import { TableView } from "../TableView";

describe("components", () => {
  describe("Table", () => {
    describe("TableView", () => {
      it("should render TableView component", () => {
        const tree = TestRenderer.create(withThemeProvider(<TableView />));
        expect(tree).toMatchSnapshot();
      });

      it("should render TableView component with children", () => {
        const tree = TestRenderer.create(
          withThemeProvider(<TableView>child</TableView>)
        );
        expect(tree).toMatchSnapshot();
      });

      it("should render TableView component striped", () => {
        const tree = TestRenderer.create(
          withThemeProvider(<TableView striped />)
        );
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
