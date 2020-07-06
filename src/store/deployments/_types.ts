import { GenericListState } from "store/_types";

export type Deployment = {
  _id: string;
  templateName: string;
  version: string;
  pending: boolean;
  url: string;
  deployedAt: string;
};

export type DeploymentState = GenericListState & {
  deployments: Deployment[];
};

export type AppendDeploymentAction = {
  type: "APPEND_DEPLOYMENT";
  payload: Deployment;
};

export type SetDeploymentsAction = {
  type: "SET_DEPLOYMENTS";
  payload: {
    total: number;
    offset: number;
    limit: number;
    deployments: Deployment[];
  };
};

export type UpdateDeploymentStateAction = {
  type: "UPDATE_DEPLOYMENT_STATE";
  payload: {
    id: string;
    pending: boolean;
  };
};

export type UpdateDeploymentsPagination = {
  type: "UPDATE_DEPLOYMENT_PAGINATION";
  payload: {
    limit?: number;
    offset?: number;
  };
};

export type DeploymentActionTypes =
  | AppendDeploymentAction
  | SetDeploymentsAction
  | UpdateDeploymentStateAction
  | UpdateDeploymentsPagination;
