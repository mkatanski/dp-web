import React, { useEffect } from "react";
import { PageTitle } from "components/PageTitle";
import { useDeploymentsResource } from "hooks/useDeploymentsResource";
import { Table } from "components/Table";
import { DataListContainer } from "components/DataListContainer";
import { useDeploymentsData } from "hooks/useDeploymentsData";
import { DataListProvider } from "components/DataListProvider";
import { useDispatch } from "react-redux";
import { updateDeploymentPagination } from "store/deployments";

const HomeView: React.FC = () => {
  const { fetchData } = useDeploymentsResource();
  const dispatch = useDispatch();

  const deployments = useDeploymentsData();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleOnPaginationChange = (newOffset: number) => {
    dispatch(updateDeploymentPagination({ offset: newOffset }));
  };

  return (
    <>
      <PageTitle category="general" title="Deployments" />
      <DataListProvider
        reducerName="deploymentsReducer"
        onPaginationChange={handleOnPaginationChange}
      >
        <DataListContainer title="Deployments">
          <Table striped>
            <Table.Head>
              <Table.Row>
                <Table.Header width={160}>ID</Table.Header>
                <Table.Header width={160}>Template Name</Table.Header>
                <Table.Header width={160}>Version</Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {deployments.map(deployment => (
                <Table.Row key={deployment._id}>
                  <Table.TextCell>{deployment._id}</Table.TextCell>
                  <Table.TextCell>{deployment.templateName}</Table.TextCell>
                  <Table.TextCell>{deployment.version}</Table.TextCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </DataListContainer>
      </DataListProvider>
    </>
  );
};

export default HomeView;
