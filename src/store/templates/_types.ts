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

export type TemplatesActionTypes = SetTemplatesAction;
