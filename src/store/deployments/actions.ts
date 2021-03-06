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

export const pendingTimerTick = (): DeploymentActionTypes => {
  return {
    type: "TIMER_TICK"
  };
};

export const addToPending = (
  id: string,
  timeLeft = 30
): DeploymentActionTypes => {
  return {
    type: "ADD_TO_PENDING",
    payload: {
      id,
      timeLeft
    }
  };
};
