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

    case "UPDATE_TEMPLATES_PAGINATION": {
      const { offset, limit } = action.payload;
      const getValue = (def: number, n?: number) => {
        if (typeof n === "undefined") return def;
        return n;
      };

      return {
        ...state,
        offset: getValue(state.offset, offset),
        limit: getValue(state.limit, limit)
      };
    }

    default:
      return state;
  }
};
