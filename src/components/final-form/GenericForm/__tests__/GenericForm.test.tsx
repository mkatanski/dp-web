/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Field } from "react-final-form";
import { render, fireEvent, wait } from "@testing-library/react";

import { GenericForm } from "../GenericForm";

describe("components", () => {
  describe("GenericForm", () => {
    const submitHandler: jest.Mock = jest.fn();
    it("should render GenericForm component with Field component", () => {
      const tree = TestRenderer.create(
        <GenericForm
          onSubmit={submitHandler}
          initialValues={{ nickname: "MirasHandlarz" }}
        >
          <Field
            name="nickname"
            component="input"
            type="text"
            placeholder="Nickname"
          />
        </GenericForm>
      );
      expect(tree).toMatchSnapshot();
    });

    it("should submit correct data", async () => {
      const submitHandler = jest.fn();

      const { getByTestId } = render(
        <GenericForm
          onSubmit={submitHandler}
          initialValues={{ nickname: "MirasHandlarz" }}
        >
          <Field
            data-testid="input"
            name="nickname"
            component="input"
            type="text"
            placeholder="Nickname"
          />
          <button role="submit" data-testid="submit" type="submit">
            submitForm
          </button>
        </GenericForm>
      );
      await wait(() => {
        fireEvent.change(getByTestId("input"), {
          target: { value: "blytEsT123$bly" }
        });
      });

      await wait(() => {
        fireEvent.click(getByTestId("submit"));
      });

      expect(submitHandler).toBeCalledTimes(1);
      expect(submitHandler.mock.calls[0][0]).toEqual({
        nickname: "blytEsT123$bly"
      });
    });
  });
});
