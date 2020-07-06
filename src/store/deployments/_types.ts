export type Deployment = {
  _id: string;
  templateName: string;
  version: string;
  pending: boolean;
};

export type DeploymentState = {
  deployments: Deployment[];
};

export type AppendDeploymentAction = {
  type: "APPEND_DEPLOYMENT";
  payload: Deployment;
};

export type SetDeploymentsAction = {
  type: "SET_DEPLOYMENTS";
  payload: Deployment[];
};

export type UpdateDeploymentStateAction = {
  type: "UPDATE_DEPLOYMENT_STATE";
  payload: {
    id: string;
    pending: boolean;
  };
};

export type DeploymentActionTypes =
  | AppendDeploymentAction
  | SetDeploymentsAction
  | UpdateDeploymentStateAction;