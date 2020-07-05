import React from "react";

import { NavItemParent, NavItemParentProps } from "./NavItemParent";
import { NavItemChild, NavItemChildProps } from "./NavItemChild";

export type NavItemProps = NavItemParentProps & NavItemChildProps;

export const NavItem: React.FC<NavItemProps> = ({
  children,
  ...rest
}: NavItemProps) =>
  children ? (
    <NavItemParent {...rest}>{children}</NavItemParent>
  ) : (
    <NavItemChild {...rest} />
  );
