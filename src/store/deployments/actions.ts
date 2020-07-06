import { DeploymentActionTypes, Deployment } from "./_types";

export const setDeployments = (
  deployments: Deployment[],
  limit: number,
  offset: number,
  total: number
): DeploymentActionTypes => {
  return {
    type: "SET_DEPLOYMENTS",
    payload: {
      deployments,
      limit,
      offset,
      total
    }
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

export const updateDeploymentPagination = ({
  limit,
  offset
}: {
  limit?: number;
  offset?: number;
}): DeploymentActionTypes => {
  return {
    type: "UPDATE_DEPLOYMENT_PAGINATION",
    payload: {
      limit,
      offset
    }
  };
};
