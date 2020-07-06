import React from "react";
import { PageTitle } from "components/PageTitle";
import { DeploymentsTableView } from "views/DeploymentsTableView";

const HomeView: React.FC = () => {
  return (
    <>
      <PageTitle category="general" title="Deployments" />
      <DeploymentsTableView />
    </>
  );
};

export default HomeView;
