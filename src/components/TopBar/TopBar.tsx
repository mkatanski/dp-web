import React, { useContext } from "react";
import { SidebarToggleContext } from "lib/sidebar";
import {
  AppBar as MuiAppBar,
  AppBarProps,
  Toolbar as MuiToolbar,
  ToolbarProps,
  IconButton
} from "@material-ui/core";
import { MenuOutlined } from "@material-ui/icons";
import { Breakpoints } from "config/breakpoints";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const AppBar = styled(MuiAppBar)`
  box-shadow: none;
`;

const Toolbar = styled(MuiToolbar)`
  justify-content: flex-start;

  .menuButton {
    margin-right: ${({ theme }) => `${theme.spacing(1)}px`};
  }
`;

export type TopBarProps = AppBarProps & ToolbarProps;

export const TopBar: React.FC<TopBarProps> = ({ children }: TopBarProps) => {
  const toggleSidebar = useContext(SidebarToggleContext);
  const isTablet = useMediaQuery({ maxWidth: Breakpoints.largeDesktop });

  return (
    <AppBar>
      <Toolbar>
        {isTablet && (
          <IconButton
            onClick={toggleSidebar}
            className="menuButton"
            color="inherit"
          >
            <MenuOutlined />
          </IconButton>
        )}
        {children}
      </Toolbar>
    </AppBar>
  );
};
