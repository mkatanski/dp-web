import { useEffect, useRef } from "react";
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
  const dispatchRef = useRef(dispatch);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${env.FULL_PUBLIC_API_URL}/deployments`
        );
        if (result.status >= 300 && result.status < 200) {
          throw new Error(result.statusText);
        }

        const items = result.data.items as DeploymentItem[];

        dispatchRef.current(
          setDeployments(
            items.map(item => ({
              _id: item._id,
              pending: false,
              templateName: item.templateName,
              version: item.version
            }))
          )
        );
      } catch (e) {
        // Do nothing for now
      }
    };

    fetchData();
  }, [dispatchRef]);
};
