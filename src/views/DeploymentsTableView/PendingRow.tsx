import React from "react";
import { Table } from "components/Table";
import { useSelector } from "react-redux";
import { RootReducerType } from "store";
import { Deployment } from "store/deployments";
import dayjs from "dayjs";
import { Chip } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useDeploymentsResource } from "hooks/useDeploymentsResource";

export type PendingRowProps = {
  deployment: Deployment;
};

export const PendingRow: React.FC<PendingRowProps> = ({
  deployment
}: PendingRowProps) => {
  const { deleteItem, fetchData } = useDeploymentsResource();
  const timeLeft = useSelector<RootReducerType, number | undefined>(
    state => state.deploymentsReducer.pendingList[deployment._id]?.timeLeft
  );

  const handleRemove = async (id: string) => {
    await deleteItem(id);
    fetchData();
  };

  return (
    <Table.Row>
      {timeLeft && (
        <>
          <Table.TextCell>{deployment.templateName}</Table.TextCell>
          <Table.TextCell colSpan={4}>
            PENDING:{" "}
            {dayjs()
              .hour(0)
              .minute(0)
              .second(timeLeft)
              .format("HH:mm:ss")}
            {"s "}
            left
          </Table.TextCell>
        </>
      )}
      {!timeLeft && (
        <>
          <Table.TextCell>{deployment.templateName}</Table.TextCell>
          <Table.TextCell>{deployment.url}</Table.TextCell>
          <Table.TextCell>{deployment.version}</Table.TextCell>
          <Table.TextCell>{deployment.deployedAt}</Table.TextCell>
          <Table.TextCell>
            <Chip
              variant="default"
              size="small"
              icon={<Delete />}
              label="Remove"
              onClick={() => handleRemove(deployment._id)}
            />
          </Table.TextCell>
        </>
      )}
    </Table.Row>
  );
};
