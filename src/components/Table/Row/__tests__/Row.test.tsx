import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

/* Uncomment below if needed */
import { withThemeProvider } from "_test-helpers";
import { render, fireEvent } from "@testing-library/react";

import { Row } from "../Row";

/* Uncomment below if You need/want to use enzyme */
// import enzyme from "enzyme";

/* Component mock example */
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

describe("components", () => {
  describe("Row", () => {
    it("should render Row component", () => {
      const tree = TestRenderer.create(withThemeProvider(<Row />));

      expect(tree).toMatchSnapshot();
    });

    it("should render Row component with onClick", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<Row onClick={() => null} />)
      );

      expect(tree).toMatchSnapshot();
    });

    it("should handle onClick event", async () => {
      const handleClick = jest.fn();
      const tableRow = document.createElement("tbody");
      const { findByText } = render(
        withThemeProvider(
          <Row onClick={handleClick}>
            <td>Test</td>
          </Row>
        ),
        {
          container: document.body.appendChild(tableRow)
        }
      );
      fireEvent.click(await findByText("Test"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
