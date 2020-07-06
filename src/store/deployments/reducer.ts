import { DeploymentState, DeploymentActionTypes } from "./_types";

export const initialState: DeploymentState = {
  deployments: [],
  limit: 10,
  offset: 0,
  totalCount: 0
};

export const deploymentsReducer = (
  state = initialState,
  action: DeploymentActionTypes
): DeploymentState => {
  switch (action.type) {
    case "SET_DEPLOYMENTS":
      return {
        ...state,
        deployments: action.payload.deployments,
        limit: action.payload.limit,
        offset: action.payload.offset,
        totalCount: action.payload.total
      };

    case "APPEND_DEPLOYMENT":
      return {
        ...state,
        deployments: [...state.deployments, action.payload]
      };

    case "UPDATE_DEPLOYMENT_STATE": {
      const index = state.deployments.findIndex(
        element => element._id === action.payload.id
      );

      if (!~index) return state;

      const updatedDeployments = [...state.deployments];
      updatedDeployments[index].pending = action.payload.pending;

      return {
        ...state,
        deployments: updatedDeployments
      };
    }

    case "UPDATE_DEPLOYMENT_PAGINATION": {
      const { offset, limit } = action.payload;
      const getValue = (def: number, n?: number) => {
        if (typeof n === "undefined") return def;
        return n;
      };

      return {
        ...state,
        offset: getValue(state.offset, offset),
        limit: getValue(state.limit, limit)
      };
    }

    default:
      return state;
  }
};
