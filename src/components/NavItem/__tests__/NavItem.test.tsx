/* eslint-disable react/display-name */
import React from "react";
import { mount } from "enzyme";
import "jest-styled-components";

import { withThemeProvider } from "_test-helpers";

import { NavItem } from "../NavItem";

describe("components", () => {
  describe("NavItem", () => {
    it("should toggle open/close on category NavItem", () => {
      const component = mount(
        withThemeProvider(
          <NavItem title="Marketing" isOpen href="" depth={0}>
            <ul>
              <NavItem title="Products" href="/products" depth={1} />
            </ul>
          </NavItem>
        )
      );

      expect(component.props().children.props.isOpen).toBeTruthy;
      expect(component.find("button").exists()).toBe(true);

      component
        .find("button")
        .first()
        .simulate("click");
      component.update();

      expect(component.props().children.props.isOpen).toBeFalsy;
    });
  });
});
