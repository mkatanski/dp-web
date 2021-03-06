import axios from "axios";
import env from "config/vars";

import { useDispatch, useStore } from "react-redux";
import { setDeployments, addToPending } from "store/deployments";
import { RootReducerType } from "store";
import { getRandomInt } from "utils/random/getRandomInt";

export type DeploymentItem = {
  deployedAt: string;
  templateName: string;
  url: string;
  version: string;
  _id: string;
};

export type DeploymentPostBody = {
  url: string;
  templateName: string;
  version: string;
};

export const useDeploymentsResource = () => {
  const dispatch = useDispatch();
  const { getState } = useStore<RootReducerType>();

  const fetchData = async (overrides?: { offset?: number; limit?: number }) => {
    const {
      offset: storeOffset,
      limit: storeLimit
    } = getState().deploymentsReducer;

    const offset = Number.isInteger(overrides?.offset)
      ? overrides?.offset
      : storeOffset;
    const limit = Number.isInteger(overrides?.limit)
      ? overrides?.limit
      : storeLimit;

    try {
      const result = await axios.get(
        `${env.FULL_PUBLIC_API_URL}/deployments?limit=${limit}&offset=${offset}`
      );
      if (result.status >= 300 && result.status < 200) {
        throw new Error(result.statusText);
      }

      const items = result.data.items as DeploymentItem[];

      dispatch(
        setDeployments(
          items.map(item => ({
            _id: item._id,
            templateName: item.templateName,
            version: item.version,
            url: item.url,
            deployedAt: item.deployedAt
          })),
          result.data.limit,
          result.data.offset,
          result.data.totalCount
        )
      );
    } catch (e) {
      // Do nothing for now
    }
  };

  const postData = async (body: DeploymentPostBody) => {
    try {
      const result = await axios.post(
        `${env.FULL_PUBLIC_API_URL}/deployments`,
        body
      );
      if (result.status >= 300 && result.status < 200) {
        throw new Error(result.statusText);
      }

      const item = result.data.item as DeploymentItem;

      const seconds = getRandomInt(5, 30);

      dispatch(addToPending(item._id, seconds));

      return item;
    } catch (e) {
      // Do nothing for now
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const result = await axios.delete(
        `${env.FULL_PUBLIC_API_URL}/deployments/${id}`
      );
      if (result.status >= 300 && result.status < 200) {
        throw new Error(result.statusText);
      }
    } catch (e) {
      // Do nothing for now
    }
  };

  return { fetchData, postData, deleteItem };
};
