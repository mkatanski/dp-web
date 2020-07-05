import React from "react";
import TestRenderer from "react-test-renderer";

import LayoutBase from "../LayoutBase";
import { wait } from "@testing-library/react";

jest.mock(
  "pages/errors/NotFoundPage",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="NotFoundPage" {...rest}>
      {children}
    </div>
  )
);

jest.mock("components/fallbacks/LoadingScreen", () => ({
  LoadingScreen: jest.fn(() => {
    return <div id="LoadingScreen" />;
  })
}));

describe("layouts", () => {
  describe("LayoutBase", () => {
    it("should render LayoutBase component w/o fallback", async () => {
      const tree = TestRenderer.create(
        <LayoutBase useFallbackRoute={false}>children</LayoutBase>
      );
      expect(tree).toMatchSnapshot();
    });

    it("should render LayoutBase with given fallback component", () => {
      const tree = TestRenderer.create(
        <LayoutBase fallbackRouteComponent={() => <div>Fallback</div>}>
          children
        </LayoutBase>
      );
      expect(tree).toMatchSnapshot();
    });

    it("should render LayoutBase with default fallback component", async () => {
      const tree = TestRenderer.create(<LayoutBase>children</LayoutBase>);
      await wait();

      expect(tree).toMatchSnapshot();
    });

    it("should render a spinner as a fallback", () => {
      const Test = () => {
        throw new Promise(r => {
          r();
        });
      };
      const tree = TestRenderer.create(
        <LayoutBase>
          <Test />
        </LayoutBase>
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
