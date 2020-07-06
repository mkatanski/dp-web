import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Divider,
  CardActions as BareCardActions,
  Button
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import styled from "styled-components";
import { ToggleableDrawer } from "components/ToggleableDrawer";
import { ReducerName } from "store";
import { DeploymentForm } from "components/DeploymentForm";
import { RecordsInfo } from "components/RecordsInfo";

export type DataListContainerProps = React.PropsWithChildren<{
  title: string;
  reducer: ReducerName;
}>;

const Card = styled(MuiCard)`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const StyledCardContent = styled(CardContent)`
  flex: 1 1 auto;
  display: flex;
  padding: 0;

  & > div {
    overflow: scroll;
    flex: 1 1 auto;
    position: relative;
  }
`;

const CardActions = styled(BareCardActions)`
  justify-content: flex-end;
  padding: 0;
`;

export const DataListContainer: React.FC<DataListContainerProps> = ({
  children,
  reducer,
  title
}: DataListContainerProps) => (
  <>
    <RecordsInfo forReducer={reducer} />
    <Card>
      <CardHeader
        title={title}
        action={
          <ToggleableDrawer
            renderButton={({ setDrawerState }) => (
              <Button
                startIcon={<Add />}
                variant="outlined"
                color="primary"
                onClick={() => setDrawerState(true)}
              >
                New Deployment
              </Button>
            )}
            drawerAnchor="right"
          >
            <DeploymentForm />
          </ToggleableDrawer>
        }
      />
      <Divider />
      <StyledCardContent>{children}</StyledCardContent>
      <CardActions></CardActions>
    </Card>
  </>
);
