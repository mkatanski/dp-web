import React from "react";
import { Grid as BareGrid, Typography } from "@material-ui/core";
import styled from "styled-components";

export type PageTitleProps = {
  category: string;
  title: string;
};

const Grid = styled(BareGrid)`
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}px`};
`;

export const PageTitle: React.FC<PageTitleProps> = ({
  category,
  title
}: PageTitleProps) => {
  return (
    <Grid alignItems="flex-end" container justify="space-between" spacing={2}>
      <BareGrid item>
        <Typography component="h2" variant="overline" color="textSecondary">
          {category}
        </Typography>
        <Typography component="h1" variant="h3" color="textPrimary">
          {title}
        </Typography>
      </BareGrid>
    </Grid>
  );
};
