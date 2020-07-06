import React, { useEffect, useRef } from "react";
import { PageTitle } from "components/PageTitle";
import { useDeploymentsResource } from "hooks/useDeploymentsResource";
import { Table } from "components/Table";
import { DataListContainer } from "components/DataListContainer";
import { useDeploymentsData } from "hooks/useDeploymentsData";

const HomeView: React.FC = () => {
  const { fetchData } = useDeploymentsResource();
  const fetchRef = useRef(fetchData);

  const deployments = useDeploymentsData();

  useEffect(() => {
    fetchRef.current();
  }, [fetchRef]);

  return (
    <>
      <PageTitle category="general" title="Deployments" />
      <DataListContainer title="Deployments" reducer="deploymentsReducer">
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
    </>
  );
};

export default HomeView;
