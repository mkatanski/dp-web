import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { SelectFieldView } from "../SelectField.view";
import { withThemeProvider } from "_test-helpers";

describe("components", () => {
  describe("SelectField", () => {
    describe("SelectFieldView", () => {
      it("should render SelectFieldView component", () => {
        const tree = TestRenderer.create(
          withThemeProvider(<SelectFieldView name="test" value="test" />)
        );
        expect(tree).toMatchSnapshot();
      });

      it("should render SelectFieldView component with children", () => {
        const tree = TestRenderer.create(
          withThemeProvider(
            <SelectFieldView name="test" value="test">
              child
            </SelectFieldView>
          )
        );
        expect(tree).toMatchSnapshot();
      });

      it("should render SelectFieldView with error", () => {
        const tree = TestRenderer.create(
          withThemeProvider(
            <SelectFieldView
              name="test2"
              value="test2"
              errorMessage="Something went wrong"
            />
          )
        );
        expect(tree).toMatchSnapshot();
      });

      it("should render SelectFieldView with label", () => {
        const tree = TestRenderer.create(
          withThemeProvider(
            <SelectFieldView name="test2" value="test2" label="This is label" />
          )
        );
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
