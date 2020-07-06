import { GenericListState } from "store/_types";

export type Template = {
  _id: string;
  name: string;
  versions: string[];
};

export type TemplateState = GenericListState & {
  templates: Template[];
};

export type SetTemplatesAction = {
  type: "SET_TEMPLATES";
  payload: {
    total: number;
    offset: number;
    limit: number;
    templates: Template[];
  };
};

export type UpdateTemplatesPagination = {
  type: "UPDATE_TEMPLATES_PAGINATION";
  payload: {
    limit?: number;
    offset?: number;
  };
};

export type TemplatesActionTypes =
  | SetTemplatesAction
  | UpdateTemplatesPagination;
