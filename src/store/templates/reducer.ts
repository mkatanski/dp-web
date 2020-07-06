import { TemplateState, TemplatesActionTypes } from "./_types";

export const initialState: TemplateState = {
  templates: [],
  limit: 10,
  offset: 0,
  totalCount: 0
};

export const templatesReducer = (
  state = initialState,
  action: TemplatesActionTypes
): TemplateState => {
  switch (action.type) {
    case "SET_TEMPLATES":
      return {
        ...state,
        templates: action.payload.templates,
        limit: action.payload.limit,
        offset: action.payload.offset,
        totalCount: action.payload.total
      };

    default:
      return state;
  }
};
