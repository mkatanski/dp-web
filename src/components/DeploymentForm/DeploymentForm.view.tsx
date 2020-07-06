import React from "react";
import styled from "styled-components";
import {
  IconButton,
  Card as MuiCard,
  CardHeader,
  CardContent,
  CardActions,
  Box,
  Button,
  AppBar as MuiAppBar,
  Toolbar,
  Grid
} from "@material-ui/core";
import { Close, CheckOutlined } from "@material-ui/icons";
import { TextField } from "components/final-form/TextField";

export type DeploymentFormViewProps = {
  onCloseClick?: () => void;
};

const Card = styled(MuiCard)`
  width: ${({ theme }) => theme.spacing(50)}px;
  height: 100vh;
`;

const AppBar = styled(MuiAppBar)`
  top: auto;
  bottom: 0;
  width: ${({ theme }) => theme.spacing(50)}px;
`;

const ActionsBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * + * {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const DeploymentFormView: React.FC<DeploymentFormViewProps> = ({
  onCloseClick
}: DeploymentFormViewProps) => {
  const handleCloseClick = () => {
    onCloseClick && onCloseClick();
  };

  return (
    <Card>
      <CardHeader
        title="Create new deployment"
        action={
          <Box marginTop={1}>
            <IconButton
              size="small"
              data-testid="close-btn"
              onClick={handleCloseClick}
            >
              <Close />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        <TextField
          type="text"
          name="templateName"
          label="Template name"
          variant="outlined"
          fullWidth
        />

        <TextField
          type="text"
          name="version"
          label="Version"
          variant="outlined"
          fullWidth
        />
      </CardContent>
      <CardActions disableSpacing>
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <Grid alignItems="center" container spacing={2}>
              <Grid item md={12}>
                <ActionsBar>
                  <Button
                    type="submit"
                    data-testid="submit-btn"
                    startIcon={<CheckOutlined />}
                  >
                    Deploy
                  </Button>
                </ActionsBar>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </CardActions>
    </Card>
  );
};
