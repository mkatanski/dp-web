import React from "react";
import { useDeploymentsData } from "hooks/useDeploymentsData";
import { PendingRow } from "./PendingRow";

export type DeploymentsTableViewRowsProps = {};

export const DeploymentsTableViewRows: React.FC<DeploymentsTableViewRowsProps> = () => {
  const deployments = useDeploymentsData();

  return (
    <>
      {deployments.map(deployment => (
        <PendingRow key={deployment._id} deployment={deployment} />
      ))}
    </>
  );
};
