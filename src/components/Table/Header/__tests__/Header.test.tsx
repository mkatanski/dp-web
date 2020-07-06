import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

/* Uncomment below if needed */
import { withThemeProvider } from "_test-helpers";
import { render, fireEvent } from "@testing-library/react";

import { Header } from "../Header";

/* Uncomment below if You need/want to use enzyme */
// import enzyme from "enzyme";

/* Component mock example */
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

describe("components", () => {
  describe("Header", () => {
    it("should render Header component", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<Header showSortLabel />)
      );

      expect(tree).toMatchSnapshot();
    });

    it("should render Header component with specific width", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<Header width={145} showSortLabel />)
      );

      expect(tree).toMatchSnapshot();
    });

    it("should render Header component with ASC sort order", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<Header sortDirection="asc" showSortLabel />)
      );

      expect(tree).toMatchSnapshot();
    });

    it("should render Header component with DESC sort order", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<Header sortDirection="desc" showSortLabel />)
      );

      expect(tree).toMatchSnapshot();
    });

    it("should render Header component with onClick", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<Header onClick={() => null} showSortLabel />)
      );

      expect(tree).toMatchSnapshot();
    });

    it("should handle onClick event", async () => {
      const handleClick = jest.fn();
      const tableRow = document.createElement("tr");
      const { findByText } = render(
        withThemeProvider(<Header onClick={handleClick}>Test</Header>),
        {
          container: document.body.appendChild(tableRow)
        }
      );
      fireEvent.click(await findByText("Test"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
