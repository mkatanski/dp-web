/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { useField } from "react-final-form";

import { TextField } from "../TextField";
import { withThemeProvider } from "_test-helpers";

jest.mock("react-final-form", () => ({
  useField: jest.fn()
}));

const mockUseField = useField as jest.Mock;

describe("components", () => {
  describe("final-form", () => {
    describe("TextField", () => {
      it("should handle case when field is valid", () => {
        mockUseField.mockReturnValue({
          input: {},
          meta: {
            touched: true,
            error: false
          }
        });
        const validateFn = jest.fn();
        const tree = TestRenderer.create(
          withThemeProvider(
            <TextField name="TextField" validate={validateFn} />
          )
        );
        expect(mockUseField).toHaveBeenCalledWith("TextField", {
          type: undefined,
          validate: validateFn
        });
        expect(tree).toMatchSnapshot();
      });

      it("should handle case when there is an error", () => {
        mockUseField.mockReturnValue({
          input: {},
          meta: {
            touched: true,
            error: "This field is invalid"
          }
        });
        const validateFn = jest.fn();
        const tree = TestRenderer.create(
          withThemeProvider(
            <TextField name="TextField" validate={validateFn} />
          )
        );
        expect(mockUseField).toHaveBeenCalledWith("TextField", {
          type: undefined,
          validate: validateFn
        });
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
