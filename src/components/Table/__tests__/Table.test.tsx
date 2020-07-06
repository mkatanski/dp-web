/* eslint-disable react/display-name */
import React from "react";
import enzyme from "enzyme";
import "jest-styled-components";

/* Uncomment below if needed */
import TestRenderer from "react-test-renderer";
// import { render, getByTestId } from "@testing-library/react";

import { Table } from "../Table";
import { withThemeProvider } from "_test-helpers";

describe("components", () => {
  describe("Table", () => {
    it("should render TableView", () => {
      const component = enzyme.shallow(<Table />);
      expect(component.find("TableView").exists()).toBe(true);
    });
  });

  it("should render TableView component with maxHeight", () => {
    const tree = TestRenderer.create(
      withThemeProvider(<Table maxHeight={500} />)
    );
    expect(tree).toMatchSnapshot();
  });
});
