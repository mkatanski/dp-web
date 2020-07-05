/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { StorefrontOutlined } from "@material-ui/icons";
import { withThemeProvider } from "_test-helpers";

import { NavItemParent } from "../NavItemParent";

describe("components/NavItem", () => {
  describe("NavItemParent", () => {
    it("should render NavItemParent as open with icon", () => {
      const tree = TestRenderer.create(
        withThemeProvider(
          <NavItemParent title="Marketing" isOpen icon={StorefrontOutlined}>
            children
          </NavItemParent>
        )
      );

      expect(tree).toMatchSnapshot();
    });

    it("should render NavItemParent as closed", () => {
      const tree = TestRenderer.create(
        withThemeProvider(
          <NavItemParent title="Marketing">children</NavItemParent>
        )
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
