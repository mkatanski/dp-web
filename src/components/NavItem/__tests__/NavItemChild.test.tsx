/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { withThemeProvider } from "_test-helpers";
import { StorefrontOutlined } from "@material-ui/icons";
import { NavItemChild } from "../NavItemChild";

describe("components/NavItem", () => {
  describe("NavItemChild", () => {
    it("should render NavItemChild component", () => {
      const tree = TestRenderer.create(
        withThemeProvider(
          <NavItemChild
            title="Products"
            href="/products"
            depth={1}
            icon={StorefrontOutlined}
          />
        )
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
