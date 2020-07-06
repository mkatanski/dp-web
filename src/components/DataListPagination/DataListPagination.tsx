import React, { useContext } from "react";
import { TablePagination } from "@material-ui/core";
import { usePaginationData } from "hooks/usePaginationData";

import {
  DataListStateContext,
  DataListActionContext
} from "components/DataListProvider";

export type DataListPaginationProps = {};

export const DataListPagination: React.FC<DataListPaginationProps> = () => {
  const { reducerName } = useContext(DataListStateContext);
  const { onPaginationChange } = useContext(DataListActionContext);

  const { limit, offset, totalCount } = usePaginationData(reducerName);
  const page = offset > 0 ? offset / limit : 0;

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    const newOffset = page * limit;
    onPaginationChange(newOffset);
  };

  return (
    <TablePagination
      component="div"
      onChangePage={handlePageChange}
      count={totalCount}
      page={page}
      rowsPerPage={limit}
      rowsPerPageOptions={[50]}
    />
  );
};
