import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

/* Uncomment below if needed */
import { withThemeProvider } from "_test-helpers";
import { render, fireEvent } from "@testing-library/react";

import { TextCell } from "../TextCell";

/* Component mock example */
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

describe("components", () => {
  describe("TextCell", () => {
    it("should render TextCell component", () => {
      const tree = TestRenderer.create(withThemeProvider(<TextCell />));

      expect(tree).toMatchSnapshot();
    });

    it("should render TextCell component with onClick", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<TextCell onClick={() => null} />)
      );

      expect(tree).toMatchSnapshot();
    });

    it("should handle onClick event", async () => {
      const handleClick = jest.fn();
      const tableRow = document.createElement("tr");
      const { findByText } = render(
        withThemeProvider(<TextCell onClick={handleClick}>Test</TextCell>),
        {
          container: document.body.appendChild(tableRow)
        }
      );

      fireEvent.click(await findByText("Test"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
