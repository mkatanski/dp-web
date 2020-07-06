import React, { useEffect, useRef } from "react";
import { Table } from "components/Table";
import { DataListContainer } from "components/DataListContainer";
import { DataListProvider } from "components/DataListProvider";
import { useDispatch } from "react-redux";
import { updateTemplatesPagination } from "store/templates";
import _ from "lodash";
import { TemplatesTableViewRows } from "./TemplatesTableViewRows";
import { useTemplatesResource } from "hooks/useTemplatesResource";

export type TemplatesTableViewProps = {};

export const TemplatesTableView: React.FC<TemplatesTableViewProps> = () => {
  const { fetchData } = useTemplatesResource();
  const fetchRef = useRef(fetchData);
  const dispatch = _.debounce(useDispatch(), 100);

  useEffect(() => {
    fetchRef.current();
  }, [fetchRef]);

  const handleOnPaginationChange = (newOffset: number) => {
    dispatch(updateTemplatesPagination({ offset: newOffset }));
    fetchRef.current({ offset: newOffset });
  };

  return (
    <DataListProvider
      reducerName="templatesReducer"
      onPaginationChange={handleOnPaginationChange}
    >
      <DataListContainer title="Templates">
        <Table striped>
          <Table.Head>
            <Table.Row>
              <Table.Header width={160}>Template Name</Table.Header>
              <Table.Header width={160}>Versions</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <TemplatesTableViewRows />
          </Table.Body>
        </Table>
      </DataListContainer>
    </DataListProvider>
  );
};
