/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { useField } from "hooks/useField";

import { TextField } from "../TextField";

// Uncomment below if You need/want to use enzyme
// import enzyme from "enzyme";

jest.mock("components/forms/TextField/TextFieldElement", () => ({
  TextFieldElement: ({ ...rest }: React.FC<{}>) => (
    <input id="TextFieldElement" data-prop={rest} />
  )
}));

jest.mock("hooks/useField", () => ({
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
          <TextField name="TextField" validate={validateFn} />
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
          <TextField name="TextField" validate={validateFn} />
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
