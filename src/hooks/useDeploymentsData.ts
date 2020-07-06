import { useSelector } from "react-redux";
import _ from "lodash";

import { RootReducerType } from "store";
import { DeploymentState } from "store/deployments";

export const useDeploymentsData = () => {
  const deploymentsStore = useSelector<RootReducerType, DeploymentState>(
    state => state.deploymentsReducer,
    (left, right) => _.isEqual(left.deployments, right.deployments)
  );

  return deploymentsStore.deployments;
};
