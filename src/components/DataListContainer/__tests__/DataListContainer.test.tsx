/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { withThemeProvider } from "_test-helpers";

import { DataListContainer } from "../DataListContainer";
import { DataListStateContext } from "lib/data-list";

jest.mock("components/data-list/DataListPagination", () => ({
  DataListPagination: ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="DataListPagination" data-props={rest}>
      {children}
    </div>
  )
}));

jest.mock("components/ToggleableDrawer", () => ({
  ...require.requireActual("components/ToggleableDrawer"),
  ToggleableDrawer: ({
    children,
    className,
    ...rest
  }: React.PropsWithChildren<{ className: string }>) => (
    <div id="ToggleableDrawer" className={className} data-props={rest}>
      {children}
    </div>
  )
}));

jest.mock("components/forms/FiltersForm", () => ({
  ...require.requireActual("components/forms/FiltersForm"),
  FiltersForm: ({
    children,
    className,
    ...rest
  }: React.PropsWithChildren<{ className: string }>) => (
    <div id="FiltersForm" className={className} data-props={rest}>
      {children}
    </div>
  )
}));

describe("components", () => {
  describe("DataListContainer", () => {
    it("should render DataListContainer with records data ", () => {
      const tree = TestRenderer.create(
        withThemeProvider(
          <DataListStateContext.Provider
            value={{ page: 11, size: 1000, totalItems: 2345, totalPages: 3 }}
          >
            <DataListContainer title="test_title">
              Some childs
            </DataListContainer>
          </DataListStateContext.Provider>
        )
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
