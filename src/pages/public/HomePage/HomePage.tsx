import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { PageTitle } from "components/PageTitle";
import { ToggleableDrawer } from "components/ToggleableDrawer";
import { DeploymentForm } from "components/DeploymentForm";
import { DeploymentsTableView } from "views/DeploymentsTableView";
import styled from "styled-components";
import { mediaSize } from "styles/theme/mediaQueries";

const NewDeploymentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  ${mediaSize.mobile} {
    justify-content: flex-end;
  }

  ${mediaSize.tablet} {
    justify-content: flex-end;
  }
`;

const HomeView: React.FC = () => {
  return (
    <>
      <Grid container alignItems="flex-end" alignContent="flex-end">
        <Grid item xs={12} sm={6}>
          <PageTitle category="general" title="Deployments" />
        </Grid>
        <Grid item xs={12} sm={6} alignItems="flex-end" alignContent="flex-end">
          <NewDeploymentWrapper>
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
          </NewDeploymentWrapper>
        </Grid>
      </Grid>

      <DeploymentsTableView />
    </>
  );
};

export default HomeView;
