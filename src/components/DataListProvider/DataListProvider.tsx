import React from "react";
import { ReducerName } from "store";
import { DataListStateContext, DataListActionContext } from "./DataListContext";

export type DataListProviderProps = React.PropsWithChildren<{
  onPaginationChange?: (newOffset: number) => void;
  reducerName: ReducerName;
}>;

export const DataListProvider: React.FC<DataListProviderProps> = ({
  children,
  reducerName,
  onPaginationChange = () => undefined
}: DataListProviderProps) => {
  return (
    <DataListStateContext.Provider value={{ reducerName }}>
      <DataListActionContext.Provider value={{ onPaginationChange }}>
        {children}
      </DataListActionContext.Provider>
    </DataListStateContext.Provider>
  );
};
