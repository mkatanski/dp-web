import { DeploymentActionTypes, Deployment } from "./_types";

export const setDeployments = (
  deployments: Deployment[]
): DeploymentActionTypes => {
  return {
    type: "SET_DEPLOYMENTS",
    payload: deployments
  };
};

export const appendDeployment = (
  deployment: Deployment
): DeploymentActionTypes => {
  return {
    type: "APPEND_DEPLOYMENT",
    payload: deployment
  };
};

export const updateDeploymentState = ({
  id,
  isPending
}: {
  id: string;
  isPending: boolean;
}): DeploymentActionTypes => {
  return {
    type: "UPDATE_DEPLOYMENT_STATE",
    payload: {
      id,
      pending: isPending
    }
  };
};
