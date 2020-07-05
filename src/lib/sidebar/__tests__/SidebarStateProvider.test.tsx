import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { renderHook, act } from "@testing-library/react-hooks";

import { SidebarStateContext, SidebarToggleContext } from "lib/sidebar";
import { SidebarStateProvider } from "../SidebarStateProvider";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn()
}));

const mockUseLocation = useLocation as jest.Mock;

describe("lib", () => {
  describe("sidebar", () => {
    describe("SidebarStateProvider", () => {
      beforeEach(() => {
        mockUseLocation.mockClear();
        mockUseLocation.mockReturnValue({ pathname: "page1" });
      });

      it("should sidebar be closed on init", () => {
        const wrapper = ({ children }: React.PropsWithChildren<{}>) => (
          <SidebarStateProvider>{children}</SidebarStateProvider>
        );
        const { result } = renderHook(() => useContext(SidebarStateContext), {
          wrapper
        });
        expect(result.current).toBeFalsy();
      });

      it("should sidebar open on click", () => {
        const wrapper = ({ children }: React.PropsWithChildren<{}>) => (
          <SidebarStateProvider>{children}</SidebarStateProvider>
        );
        const { result } = renderHook(
          () => {
            const state = useContext(SidebarStateContext);
            const toggle = useContext(SidebarToggleContext);
            return { state, toggle };
          },
          { wrapper }
        );

        expect(result.current.state).toBeFalsy();
        act(() => {
          result.current.toggle();
        });
        expect(result.current.state).toBeTruthy();
      });

      //ToDo: Create test to check if sidebar is closed on URL change
    });
  });
});
