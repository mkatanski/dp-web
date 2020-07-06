import React from "react";
import {
  Card as MuiCard,
  Typography,
  CardContent,
  CardHeader,
  Divider,
  CardActions as BareCardActions,
  IconButton
} from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import styled from "styled-components";
import { ToggleableDrawer } from "components/ToggleableDrawer";
import { usePaginationData } from "hooks/usePaginationData";
import { ReducerName } from "store";

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
}: DataListContainerProps) => {
  const { limit, offset, totalCount } = usePaginationData(reducer);

  const page = offset > 0 ? offset / limit : 0;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <>
      <Typography color="textSecondary" gutterBottom variant="body2">
        {totalCount} records found. Page {page + 1} of {totalPages}
      </Typography>
      <Card>
        <CardHeader
          title={title}
          action={
            <ToggleableDrawer
              renderButton={({ setDrawerState }) => (
                <IconButton onClick={() => setDrawerState(true)}>
                  <FilterList />
                </IconButton>
              )}
              drawerAnchor="right"
            ></ToggleableDrawer>
          }
        />
        <Divider />
        <StyledCardContent>{children}</StyledCardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
};