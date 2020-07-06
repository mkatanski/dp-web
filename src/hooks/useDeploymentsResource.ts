import axios from "axios";
import env from "config/vars";

import { useDispatch } from "react-redux";
import { setDeployments } from "store/deployments";
import { usePaginationData } from "./usePaginationData";

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
  const { limit, offset } = usePaginationData("deploymentsReducer");

  const fetchData = async () => {
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
            pending: false,
            templateName: item.templateName,
            version: item.version
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

      const item = result.data.item as DeploymentItem[];
      return item;
    } catch (e) {
      // Do nothing for now
    }
  };

  return { fetchData, postData };
};
