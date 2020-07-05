import React from "react";
import { createContextWithPartial } from "utils/context/createContextWithPartial";

export type ToggleableDrawerContextElements = {
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
  drawerState: boolean;
};

export const ToggleableDrawerContext = createContextWithPartial<
  ToggleableDrawerContextElements
>({});
