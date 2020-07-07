/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import TemplatesPage from "../TemplatesPage";

jest.mock("components/PageTitle", () => ({
  PageTitle: ({ ...rest }: React.PropsWithChildren<{}>) => (
    <div id="PageTitle" data-props={rest} />
  )
}));

jest.mock("views/TemplatesTableView", () => ({
  TemplatesTableView: ({ ...rest }: React.PropsWithChildren<{}>) => (
    <div id="TemplatesTableView" data-props={rest} />
  )
}));

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
