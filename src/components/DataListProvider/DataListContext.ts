import { ReducerName } from "store";
import { createContextWithPartial } from "utils/context/createContextWithPartial";

export type DataListStateContextProps = {
  reducerName: ReducerName;
};

export type DataListActionContextProps = {
  onPaginationChange: (newOffset: number) => void;
};

export const DataListStateContext = createContextWithPartial<
  DataListStateContextProps
>({});

export const DataListActionContext = createContextWithPartial<
  DataListActionContextProps
>({});
