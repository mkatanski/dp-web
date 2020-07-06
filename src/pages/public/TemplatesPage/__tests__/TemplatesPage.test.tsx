import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import TemplatesPage from "../TemplatesPage";

// Uncomment below if You need/want to use enzyme
// import enzyme from "enzyme";

// Component mock example
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

describe("pages", () => {
  describe("protected", () => {
    describe("TemplatesPage", () => {
      it("should render TemplatesPage component", async () => {
        const tree = TestRenderer.create(<TemplatesPage />);
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
