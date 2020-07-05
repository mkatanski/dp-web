import React from "react";
import TestRenderer from "react-test-renderer";

import NotFoundView from "../NotFoundPage";

describe("pages", () => {
  describe("errors", () => {
    describe("NotFoundPage", () => {
      it("should render NotFoundPage component", async () => {
        const tree = TestRenderer.create(<NotFoundView />);
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
