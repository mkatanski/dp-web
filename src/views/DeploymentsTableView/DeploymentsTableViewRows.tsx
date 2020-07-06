import React from "react";
import { useDeploymentsData } from "hooks/useDeploymentsData";
import { Table } from "components/Table";

export type DeploymentsTableViewRowsProps = {};

export const DeploymentsTableViewRows: React.FC<DeploymentsTableViewRowsProps> = () => {
  const deployments = useDeploymentsData();

  return (
    <>
      {deployments.map(deployment => (
        <Table.Row key={deployment._id}>
          <Table.TextCell>{deployment._id}</Table.TextCell>
          <Table.TextCell>{deployment.templateName}</Table.TextCell>
          <Table.TextCell>{deployment.version}</Table.TextCell>
        </Table.Row>
      ))}
    </>
  );
};
