/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { NavListView } from "../NavListView";
import { NavItemProps } from "components/NavItem";
import { withThemeProvider } from "_test-helpers";

jest.mock("components/NavItem", () => ({
  NavItem: ({ ...rest }: React.FC<NavItemProps>) => (
    <div id="NavItem" data-prop={rest} />
  )
}));

describe("views", () => {
  describe("NavListView", () => {
    it("should render NavListView component", () => {
      const tree = TestRenderer.create(withThemeProvider(<NavListView />));

      expect(tree).toMatchSnapshot();
    });
  });
});
