/* eslint-disable react/display-name */
import React, { Suspense } from "react";
import TestRenderer from "react-test-renderer";
import { wait, cleanup } from "@testing-library/react";

import Routes from "../routes";

jest.mock(
  "pages/errors/NotFoundPage",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="NotFoundPage" {...rest}>
      {children}
    </div>
  )
);

jest.mock(
  "pages/public/HomePage",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="HomePage" {...rest}>
      {children}
    </div>
  )
);

jest.mock(
  "layouts/DefaultLayout",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="DefaultLayout" {...rest}>
      {children}
    </div>
  )
);

const waitForLazyImports = async (importsNumber: number) => {
  for (let i = 0; i < importsNumber; i++) {
    await wait();
  }
};

describe("routes", () => {
  beforeEach(cleanup);

  it("should render routes schema", async () => {
    const tree = TestRenderer.create(
      <Suspense fallback={"loading"}>
        <Routes />
      </Suspense>
    );

    await waitForLazyImports(2);

    expect(tree).toMatchSnapshot();
  });
});
