import React from "react";
import TestRenderer from "react-test-renderer";
import { SidebarStateContext } from "lib/sidebar";
import "jest-styled-components";

import { withThemeProvider, withLargeDesktopSize } from "_test-helpers";

import { Sidebar } from "../Sidebar";

describe("components", () => {
  describe("Sidebar", () => {
    it("should render Sidebar component", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<Sidebar>children</Sidebar>)
      );
      expect(tree).toMatchSnapshot();
    });

    it("should render Sidebar component with large desktop size", () => {
      const tree = TestRenderer.create(
        withThemeProvider(withLargeDesktopSize(<Sidebar>children</Sidebar>))
      );
      expect(tree).toMatchSnapshot();
    });

    it("should render Sidebar component with open drawer", () => {
      const tree = TestRenderer.create(
        <SidebarStateContext.Provider value={true}>
          <Sidebar />
        </SidebarStateContext.Provider>
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
