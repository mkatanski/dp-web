/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";

/* Uncomment below if needed */
// import { withThemeProvider, withDesktopSize } from 'testsHelpers';
// import { render, getByTestId } from "@testing-library/react";

import { DataListStateContext, DataListDispatchContext } from "lib/data-list";

import enzyme from "enzyme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let PaginationUnmocked: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let PaginationMocked: any = null;

jest
  .isolateModules(() => {
    jest.unmock("@material-ui/core");
    PaginationUnmocked = require("../DataListPagination");
  })
  .isolateModules(() => {
    jest.mock("@material-ui/core", () => ({
      TablePagination: ({ ...rest }: {}) => (
        <div id="MUI.TablePagination" data-props={rest} />
      )
    }));
    PaginationMocked = require("../DataListPagination");
  });

describe("components", () => {
  describe("DataListPagination", () => {
    it("should render DataListPagination component", () => {
      const { DataListPagination } = PaginationMocked;

      const tree = TestRenderer.create(
        <DataListStateContext.Provider
          value={{
            page: 12,
            size: 30,
            totalItems: 1000,
            totalPages: 20
          }}
        >
          <DataListPagination />
        </DataListStateContext.Provider>
      );

      expect(tree).toMatchSnapshot();
    });

    it("should handle page change click", () => {
      const { DataListPagination } = PaginationUnmocked;

      const dispatcherMock = jest.fn();
      const component = enzyme.mount(
        <DataListStateContext.Provider
          value={{ page: 12, size: 30, totalItems: 1000, totalPages: 20 }}
        >
          <DataListDispatchContext.Provider value={dispatcherMock}>
            <DataListPagination />
          </DataListDispatchContext.Provider>
        </DataListStateContext.Provider>
      );

      component
        .find("button")
        .first()
        .simulate("click");
      expect(dispatcherMock).toHaveBeenCalledTimes(1);
      expect(dispatcherMock).toHaveBeenCalledWith({
        payload: { page: 11 },
        type: "SET_PAGE"
      });
    });
  });
});
