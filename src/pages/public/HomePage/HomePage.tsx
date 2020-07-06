import React from "react";
import { PageTitle } from "components/PageTitle";
import { DeploymentsTableView } from "views/DeploymentsTableView";

const HomeView: React.FC = () => {
  console.log("RenderPage");

  return (
    <>
      <PageTitle category="general" title="Deployments" />
      <DeploymentsTableView />
    </>
  );
};

export default HomeView;
