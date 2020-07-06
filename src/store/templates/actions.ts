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

export const updateTemplatesPagination = ({
  limit,
  offset
}: {
  limit?: number;
  offset?: number;
}): TemplatesActionTypes => {
  return {
    type: "UPDATE_TEMPLATES_PAGINATION",
    payload: {
      limit,
      offset
    }
  };
};
