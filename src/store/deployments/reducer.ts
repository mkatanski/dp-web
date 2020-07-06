import { DeploymentState, DeploymentActionTypes } from "./_types";
import { getKeysArray } from "utils/helpers/object/getKeysArray";

export const initialState: DeploymentState = {
  deployments: [],
  limit: 10,
  offset: 0,
  totalCount: 0,
  pendingList: {}
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
      return state;
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

    case "TIMER_TICK": {
      const pendingList = { ...state.pendingList };

      getKeysArray(pendingList).forEach(pendingId => {
        pendingList[pendingId].timeLeft = pendingList[pendingId].timeLeft - 1;

        if (pendingList[pendingId].timeLeft <= 0) {
          delete pendingList[pendingId];
        }
      });

      return {
        ...state,
        pendingList
      };
    }

    case "ADD_TO_PENDING": {
      return {
        ...state,
        pendingList: {
          ...state.pendingList,
          [action.payload.id]: { timeLeft: action.payload.timeLeft }
        }
      };
    }

    default:
      return state;
  }
};
