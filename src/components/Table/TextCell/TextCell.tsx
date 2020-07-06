import React from "react";
import styled from "styled-components";
import { TableCell, TableCellProps } from "@material-ui/core";

export type TextCellProps = TableCellProps & {};

export const TextCell = styled<React.ComponentType<TextCellProps>>(TableCell)`
  cursor: ${({ onClick }) => (onClick ? "pointer" : "inherit")};
`;
