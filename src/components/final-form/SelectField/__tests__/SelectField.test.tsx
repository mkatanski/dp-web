/* eslint-disable react/display-name */
import React from "react";
import enzyme from "enzyme";

import { SelectField } from "../SelectField";
import { DebugFunction } from "final-form";
import { withThemeProvider } from "_test-helpers";
import { Form } from "react-final-form";
import { render, waitForElement } from "@testing-library/react";
import { MenuItem } from "@material-ui/core";
import UserEvent from "@testing-library/user-event";

jest.unmock("@material-ui/core");

describe("components", () => {
  describe("SelectField", () => {
    const getWrapper = (
      initialValues: {},
      onDebug: DebugFunction<{}>,
      submitHandler: jest.Mock = jest.fn()
    ): React.FunctionComponent<{}> => ({ children }) =>
      withThemeProvider(
        <Form
          onSubmit={submitHandler}
          debug={onDebug}
          initialValues={initialValues}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>{children}</form>
          )}
        />
      );

    it("should render SelectFieldView", () => {
      const component = enzyme.mount(
        withThemeProvider(
          <Form
            onSubmit={() => undefined}
            render={() => <SelectField name="testName" />}
          />
        )
      );
      expect(component.find("SelectFieldView").exists()).toBe(true);
    });

    it("should change value of the form", async () => {
      let values: Record<string, string> = {};

      const { container, getByTestId, getByRole, getByText } = render(
        <SelectField name="myCar">
          <MenuItem data-testid="menu-item-1" value="ferrari">
            Ferrari
          </MenuItem>
          <MenuItem data-testid="menu-item-2" value="lamborghini">
            Lamborghini
          </MenuItem>
        </SelectField>,
        {
          wrapper: getWrapper({ myCar: "ferrari" }, props => {
            values = props.values;
          })
        }
      );

      const selectNode = getByTestId("rff-select-myCar-input");
      const selectButton = getByRole("button");
      expect(selectButton).not.toBeNull();
      expect(selectNode).not.toBeNull();

      UserEvent.click(selectButton);
      await waitForElement(() => getByText("Lamborghini"), { container });
      const itemClickable = getByText("Lamborghini");
      UserEvent.click(itemClickable);

      expect(values).toEqual({ myCar: "lamborghini" });
    });
  });
});
