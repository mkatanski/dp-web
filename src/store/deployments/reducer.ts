import { DeploymentState, DeploymentActionTypes } from "./_types";

export const initialState: DeploymentState = {
  deployments: []
};

export const deploymentsReducer = (
  state = initialState,
  action: DeploymentActionTypes
): DeploymentState => {
  switch (action.type) {
    case "SET_DEPLOYMENTS":
      return {
        ...state,
        deployments: action.payload
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

    default:
      return state;
  }
};
