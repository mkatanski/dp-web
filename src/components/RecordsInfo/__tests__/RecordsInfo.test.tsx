import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { RecordsInfo } from "../RecordsInfo";

describe("components", () => {
  describe("RecordsInfo", () => {
    it("should render RecordsInfo component", () => {
      const tree = TestRenderer.create(
        <RecordsInfo forReducer="deploymentsReducer" />
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
