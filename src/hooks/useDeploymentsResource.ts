import axios from "axios";
import env from "config/vars";

import { useDispatch } from "react-redux";
import { setDeployments } from "store/deployments";

export type DeploymentItem = {
  deployedAt: string;
  templateName: string;
  url: string;
  version: string;
  _id: string;
};

export const useDeploymentsResource = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const result = await axios.get(`${env.FULL_PUBLIC_API_URL}/deployments`);
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

  return fetchData;
};
