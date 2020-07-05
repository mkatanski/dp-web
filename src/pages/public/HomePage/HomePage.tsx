import React from "react";
import { PageTitle } from "components/PageTitle";
import { useDeploymentsResource } from "hooks/useDeploymentsResource";

const HomeView: React.FC = () => {
  useDeploymentsResource();
  return <PageTitle category="general" title="Deployments" />;
};

export default HomeView;
