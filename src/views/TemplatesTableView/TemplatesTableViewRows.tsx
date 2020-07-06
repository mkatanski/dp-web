import React from "react";
import { useTemplatesData } from "hooks/useTemplatesData";
import { Table } from "components/Table";
import { Chip } from "@material-ui/core";
import styled from "styled-components";

export type DeploymentsTableViewRowsProps = {};

const StyledChip = styled(Chip)`
  margin-right: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const TemplatesTableViewRows: React.FC<DeploymentsTableViewRowsProps> = () => {
  const templates = useTemplatesData();

  return (
    <>
      {templates.map(template => (
        <Table.Row key={template._id}>
          <Table.TextCell>{template.name}</Table.TextCell>
          <Table.TextCell>
            {template.versions.map(version => {
              return <StyledChip key={version} label={version} size="small" />;
            })}
          </Table.TextCell>
        </Table.Row>
      ))}
    </>
  );
};
