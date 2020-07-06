import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

/* Uncomment below if needed */
// import { withThemeProvider, withDesktopSize } from 'testsHelpers';
// import { render, getByTestId } from "@testing-library/react";

import { DataListProvider } from "../DataListProvider";

/* Uncomment below if You need/want to use enzyme */
// import enzyme from "enzyme";

/* Component mock example */
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

describe("components", () => {
  describe("DataListProvider", () => {
    it("should render DataListProvider component", () => {
      const tree = TestRenderer.create(<DataListProvider />);

      expect(tree).toMatchSnapshot();
    });
  });
});
