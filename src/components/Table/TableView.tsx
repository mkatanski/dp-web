import React from "react";
import styled from "styled-components";
import { Table } from "@material-ui/core";
import { omit } from "utils/helpers";

export type TableViewProps = {
  striped?: boolean;
};

export const TableView = styled<React.ComponentType<TableViewProps>>(props => (
  <Table stickyHeader {...omit(props, "striped")} />
))`
  position: absolute;

  th {
    padding: ${({ theme }) => theme.spacing(1, 2)};
  }

  td {
    padding: ${({ theme }) => theme.spacing(2, 2)};
  }

  tr:nth-child(even) {
    background: ${({ theme, striped }) =>
      striped ? theme.palette.grey[50] : "inherit"};
  }
`;

TableView.displayName = "TableView";
