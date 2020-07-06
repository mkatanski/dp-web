import { useSelector } from "react-redux";
import _ from "lodash";

import { RootReducerType } from "store";
import { TemplateState } from "store/templates";

export const useTemplatesData = () => {
  const templatesStore = useSelector<RootReducerType, TemplateState>(
    state => state.templatesReducer,
    (left, right) => _.isEqual(left.templates, right.templates)
  );

  return templatesStore.templates;
};
