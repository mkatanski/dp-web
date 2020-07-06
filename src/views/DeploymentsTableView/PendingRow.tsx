import React from "react";
import { Table } from "components/Table";
import { useSelector } from "react-redux";
import { RootReducerType } from "store";
import { Deployment } from "store/deployments";

export type PendingRowProps = {
  deployment: Deployment;
};

export const PendingRow: React.FC<PendingRowProps> = ({
  deployment
}: PendingRowProps) => {
  const timeLeft = useSelector<RootReducerType, number | undefined>(
    state => state.deploymentsReducer.pendingList[deployment._id]?.timeLeft
  );

  return (
    <Table.Row>
      {timeLeft && (
        <>
          <Table.TextCell>{deployment.templateName}</Table.TextCell>
          <Table.TextCell colSpan={4}>PENDING: {timeLeft} left</Table.TextCell>
        </>
      )}
      {!timeLeft && (
        <>
          <Table.TextCell>{deployment.templateName}</Table.TextCell>
          <Table.TextCell>{deployment.url}</Table.TextCell>
          <Table.TextCell>{deployment.version}</Table.TextCell>
          <Table.TextCell>{deployment.deployedAt}</Table.TextCell>
          <Table.TextCell>remove</Table.TextCell>
        </>
      )}
    </Table.Row>
  );
};