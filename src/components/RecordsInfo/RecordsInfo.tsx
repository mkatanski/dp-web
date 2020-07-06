import React from "react";
import { ReducerName } from "store";
import { usePaginationData } from "hooks/usePaginationData";
import { Typography } from "@material-ui/core";

export type RecordsInfoProps = {
  forReducer: ReducerName;
};

export const RecordsInfo: React.FC<RecordsInfoProps> = ({
  forReducer
}: RecordsInfoProps) => {
  const { limit, offset, totalCount } = usePaginationData(forReducer);

  const page = offset > 0 ? offset / limit : 0;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <Typography color="textSecondary" gutterBottom variant="body2">
      {totalCount} records found. Page {page + 1} of {totalPages}
    </Typography>
  );
};
