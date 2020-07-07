/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { withThemeProvider } from "_test-helpers";

import { DataListContainer } from "../DataListContainer";

jest.mock("components/DataListPagination", () => ({
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

jest.mock("components/RecordsInfo", () => ({
  ...require.requireActual("components/RecordsInfo"),
  RecordsInfo: ({
    children,
    className,
    ...rest
  }: React.PropsWithChildren<{ className: string }>) => (
    <div id="RecordsInfo" className={className} data-props={rest}>
      {children}
    </div>
  )
}));

jest.mock("components/DeploymentForm", () => ({
  ...require.requireActual("components/DeploymentForm"),
  DeploymentForm: ({
    children,
    className,
    ...rest
  }: React.PropsWithChildren<{ className: string }>) => (
    <div id="DeploymentForm" className={className} data-props={rest}>
      {children}
    </div>
  )
}));

describe("components", () => {
  describe("DataListContainer", () => {
    it("should render DataListContainer with records data ", () => {
      const tree = TestRenderer.create(
        withThemeProvider(
          <DataListContainer title="test_title">Some childs</DataListContainer>
        )
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
