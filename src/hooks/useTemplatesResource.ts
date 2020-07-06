import axios from "axios";
import env from "config/vars";

import { useDispatch, useStore } from "react-redux";
import { RootReducerType } from "store";
import { setTemplates } from "store/templates";

export type TemplateItem = {
  name: string;
  versions: string[];
  _id: string;
};

export const useTemplatesResource = () => {
  const dispatch = useDispatch();
  const { getState } = useStore<RootReducerType>();

  const fetchData = async (overrides?: { offset?: number; limit?: number }) => {
    const {
      offset: storeOffset,
      limit: storeLimit
    } = getState().templatesReducer;

    const offset = Number.isInteger(overrides?.offset)
      ? overrides?.offset
      : storeOffset;
    const limit = Number.isInteger(overrides?.limit)
      ? overrides?.limit
      : storeLimit;

    try {
      const result = await axios.get(
        `${env.FULL_PUBLIC_API_URL}/templates?limit=${limit}&offset=${offset}`
      );
      if (result.status >= 300 && result.status < 200) {
        throw new Error(result.statusText);
      }

      const items = result.data.items as TemplateItem[];

      dispatch(
        setTemplates(
          items.map(item => ({
            _id: item._id,
            name: item.name,
            versions: item.versions
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

  return { fetchData };
};
