import { TemplatesActionTypes, Template } from "./_types";

export const setTemplates = (
  templates: Template[],
  limit: number,
  offset: number,
  total: number
): TemplatesActionTypes => {
  return {
    type: "SET_TEMPLATES",
    payload: {
      templates,
      limit,
      offset,
      total
    }
  };
};
