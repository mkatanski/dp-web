import React from "react";
import styled from "styled-components";
import { TableCell, TableCellProps, TableSortLabel } from "@material-ui/core";

export type HeaderProps = TableCellProps & {
  width?: number | "inherit" | "auto";
  showSortLabel?: boolean;
};

const StyledHeader = styled<React.ComponentType<HeaderProps>>(TableCell)`
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  && {
    min-width: ${({ width = "inherit" }) =>
      typeof width === "number" ? `${width}px` : width};
  }
`;

export const Header: React.FC<HeaderProps> = ({
  children,
  sortDirection,
  showSortLabel,
  ...rest
}: HeaderProps) => (
  <StyledHeader {...rest}>
    {showSortLabel && (
      <TableSortLabel
        active={!!sortDirection}
        direction={sortDirection || undefined}
      >
        {children}
      </TableSortLabel>
    )}

    {!showSortLabel && children}
  </StyledHeader>
);
