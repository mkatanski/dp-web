import React, { useContext } from "react";
import { usePaginationData } from "hooks/usePaginationData";
import { Typography } from "@material-ui/core";
import { DataListStateContext } from "components/DataListProvider";

export type RecordsInfoProps = {};

export const RecordsInfo: React.FC<RecordsInfoProps> = () => {
  const { reducerName } = useContext(DataListStateContext);

  const { limit, offset, totalCount } = usePaginationData(reducerName);

  const page = offset > 0 ? offset / limit : 0;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <Typography color="textSecondary" gutterBottom variant="body2">
      {totalCount} records found. Page {page + 1} of {totalPages}
    </Typography>
  );
};
