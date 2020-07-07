import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { RecordsInfo } from "../RecordsInfo";
import { DataListStateContext } from "components/DataListProvider";

jest.mock("hooks/usePaginationData", () => ({
  ...require.requireActual("hooks/usePaginationData"),
  usePaginationData: jest
    .fn()
    .mockReturnValue({ limit: 10, offset: 20, totalCount: 100 })
}));

describe("components", () => {
  describe("RecordsInfo", () => {
    it("should render RecordsInfo component", () => {
      const tree = TestRenderer.create(
        <DataListStateContext.Provider
          value={{ reducerName: "deploymentsReducer" }}
        >
          <RecordsInfo />
        </DataListStateContext.Provider>
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
