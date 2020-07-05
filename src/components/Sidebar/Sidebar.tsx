import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import {
  Drawer as BareDrawer,
  DrawerProps,
  Paper as BarePaper
} from "@material-ui/core";

import { Breakpoints } from "config/breakpoints";
import { SidebarStateContext, SidebarToggleContext } from "lib/sidebar";

enum DrawerPosition {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right"
}

const Paper = styled(BarePaper)`
  width: 256px;
  top: 65px;
  height: calc(100% - 65px);
  border: none;
  border-radius: 0;
`;

export type SidebarProps = React.PropsWithChildren<{}>;

export const Sidebar: React.FC<SidebarProps> = ({ children }: SidebarProps) => {
  const isSidebarOpen = useContext(SidebarStateContext);
  const toggleSidebar = useContext(SidebarToggleContext);
  const isLargeDesktop = useMediaQuery({ minWidth: Breakpoints.largeDesktop });
  const commonDrawerProps: Partial<DrawerProps> = {
    anchor: DrawerPosition.left,
    PaperProps: { component: Paper }
  };

  return (
    <>
      {isLargeDesktop ? (
        <BareDrawer {...commonDrawerProps} open variant="persistent">
          {children}
        </BareDrawer>
      ) : (
        <BareDrawer
          {...commonDrawerProps}
          onClose={toggleSidebar}
          open={isSidebarOpen}
          variant="temporary"
        >
          {children}
        </BareDrawer>
      )}
    </>
  );
};
