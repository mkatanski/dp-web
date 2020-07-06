import React from "react";
import { TableView, TableViewProps } from "./TableView";
import {
  TableBody,
  TableHead,
  TableProps as MuiTableProps,
  TableContainer as BareTableContainer
} from "@material-ui/core";
import { omit } from "utils/helpers";

// static components
import { Row } from "./Row";
import { Header } from "./Header";
import { TextCell } from "./TextCell";

import styled from "styled-components";

type TableContainerProps = {
  maxHeight?: number | "auto";
};

export type TableProps = React.PropsWithChildren<
  TableViewProps & MuiTableProps & TableContainerProps
>;

export const TableContainer = styled<React.ComponentType<TableContainerProps>>(
  props => <BareTableContainer {...omit(props, "maxHeight")} />
)`
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
`;

export const Table: React.FC<TableProps> & {
  Row: typeof Row;
  Header: typeof Header;
  Body: typeof TableBody;
  Head: typeof TableHead;
  TextCell: typeof TextCell;
} = ({ children, ...rest }: TableProps) => {
  return (
    <TableContainer maxHeight={rest.maxHeight}>
      <TableView data-testid="TableView" {...rest}>
        {children}
      </TableView>
    </TableContainer>
  );
};

Table.Row = Row;
Table.Header = Header;
Table.Body = TableBody;
Table.Head = TableHead;
Table.TextCell = TextCell;
