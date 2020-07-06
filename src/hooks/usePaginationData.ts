import { useSelector } from "react-redux";
import _ from "lodash";

import { RootReducerType, ReducerName } from "store";

type GenericListState = { limit: number; offset: number; totalCount: number };

export const usePaginationData = (name: ReducerName) => {
  const deploymentsStore = useSelector<RootReducerType, GenericListState>(
    state => state[name] as GenericListState,
    (left, right) => {
      const leftPagination = {
        limit: left.limit,
        offset: left.offset,
        total: left.totalCount
      };

      const rightPagination = {
        limit: right.limit,
        offset: right.offset,
        total: right.totalCount
      };

      return _.isEqual(leftPagination, rightPagination);
    }
  );

  const { limit, offset, totalCount } = deploymentsStore;
  return { limit, offset, totalCount };
};
