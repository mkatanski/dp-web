import React from "react";
import { useDeploymentsData } from "hooks/useDeploymentsData";

export type DeploymentsTableViewRowsProps = {};

export const TemplatesTableViewRows: React.FC<DeploymentsTableViewRowsProps> = () => {
  const deployments = useDeploymentsData();

  return (
    <>
      {deployments.map(deployment => (
        <div key={deployment._id}>test</div>
      ))}
    </>
  );
};
